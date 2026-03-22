#!/usr/bin/env bash
#
# iNBIO Automated Blog Post Generator — Scheduled Runner
#
# Cron entry (runs Tuesdays and Fridays at 8:00 AM):
# 0 8 * * 2,5 /path/to/inbio/site/scripts/schedule-blog.sh >> /path/to/inbio/site/scripts/blog-generation.log 2>&1
#
# To install:
#   1. Make this script executable:  chmod +x scripts/schedule-blog.sh
#   2. Edit your crontab:            crontab -e
#   3. Add the cron entry above, replacing /path/to with the actual path
#
# Supports 7 AI providers (set AI_PROVIDER in .env):
#   gemini    — Google Gemini Flash (FREE tier)
#   groq      — Groq Llama 3.3 (FREE tier)
#   mistral   — Mistral Small (FREE tier)
#   deepseek  — DeepSeek V3 (~$0.001/post)
#   openai    — GPT-4o-mini (~$0.001/post)
#   anthropic — Claude Sonnet (~$0.02/post, best quality)
#   ollama    — Local models ($0, requires local setup)
#
# Auto-detects provider from available API keys if AI_PROVIDER is not set.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

timestamp() {
  date "+%Y-%m-%d %H:%M:%S"
}

echo ""
echo "=============================================="
echo "  iNBIO Blog Generator — $(timestamp)"
echo "=============================================="

cd "${PROJECT_DIR}"

# Load .env
if [ -f "${PROJECT_DIR}/.env" ]; then
  echo "[$(timestamp)] Loading .env file..."
  set -a
  source "${PROJECT_DIR}/.env"
  set +a
fi

# Check that at least one AI provider key is available
HAS_KEY=false
for key in GEMINI_API_KEY GROQ_API_KEY MISTRAL_API_KEY DEEPSEEK_API_KEY OPENAI_API_KEY ANTHROPIC_API_KEY; do
  if [ -n "${!key:-}" ]; then
    HAS_KEY=true
    break
  fi
done

if [ "${HAS_KEY}" = false ]; then
  echo "[$(timestamp)] WARNING: No AI provider API key found."
  echo "[$(timestamp)] Trying Ollama (local) — make sure it's running on localhost:11434"
fi

# Check Node.js
if ! command -v node &> /dev/null; then
  echo "[$(timestamp)] ERROR: Node.js is not installed or not in PATH."
  exit 1
fi

# Run the generator
echo "[$(timestamp)] Starting blog post generation..."
echo "[$(timestamp)] Provider: ${AI_PROVIDER:-auto-detect}"
echo ""

npx tsx "${SCRIPT_DIR}/generate-blog-post.ts"

EXIT_CODE=$?

echo ""
if [ ${EXIT_CODE} -eq 0 ]; then
  echo "[$(timestamp)] Blog post generated successfully."
else
  echo "[$(timestamp)] ERROR: Generation failed with exit code ${EXIT_CODE}."
fi

echo "=============================================="
echo ""

exit ${EXIT_CODE}
