#!/usr/bin/env tsx
/**
 * iNBIO Automated Blog Post Generator
 *
 * Generates SEO-optimized blog posts about biochar, biofuel, pyrolysis,
 * and related topics using multiple AI provider options.
 *
 * Supported providers (set AI_PROVIDER env var):
 *   - "anthropic"  — Claude Sonnet (best quality, ~$0.02/post)
 *   - "gemini"     — Google Gemini Flash (free tier available, ~$0.001/post)
 *   - "openai"     — GPT-4o-mini or GPT-5 Nano (~$0.001/post)
 *   - "groq"       — Llama 3.3 70B (free tier, ~$0.002/post)
 *   - "deepseek"   — DeepSeek V3 (~$0.001/post)
 *   - "mistral"    — Mistral Small (free tier, ~$0.003/post)
 *   - "ollama"     — Local models via Ollama ($0/post, requires local setup)
 *
 * Usage:
 *   npx tsx scripts/generate-blog-post.ts
 *   npx tsx scripts/generate-blog-post.ts --topic "biochar market trends 2026"
 *   AI_PROVIDER=gemini npx tsx scripts/generate-blog-post.ts
 *
 * Required env vars (depends on provider):
 *   ANTHROPIC_API_KEY  — for Anthropic
 *   GEMINI_API_KEY     — for Google Gemini
 *   OPENAI_API_KEY     — for OpenAI
 *   GROQ_API_KEY       — for Groq
 *   DEEPSEEK_API_KEY   — for DeepSeek
 *   MISTRAL_API_KEY    — for Mistral
 *   (Ollama needs no key — runs locally on http://localhost:11434)
 */

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const BLOG_DIR = path.resolve(__dirname, "..", "src", "app", "blog");
const TOPICS_FILE = path.resolve(__dirname, "blog-topics.json");
const BLOG_INDEX_FILE = path.join(BLOG_DIR, "page.tsx");

type ProviderName =
  | "anthropic"
  | "gemini"
  | "openai"
  | "groq"
  | "deepseek"
  | "mistral"
  | "ollama";

interface ProviderConfig {
  name: string;
  envKey: string;
  endpoint: string;
  model: string;
  costPerPost: string;
  freeTier: boolean;
  buildRequest: (
    systemPrompt: string,
    userPrompt: string,
    apiKey: string
  ) => { url: string; options: RequestInit };
  parseResponse: (json: unknown) => string;
}

const PROVIDERS: Record<ProviderName, ProviderConfig> = {
  anthropic: {
    name: "Anthropic Claude",
    envKey: "ANTHROPIC_API_KEY",
    endpoint: "https://api.anthropic.com/v1/messages",
    model: "claude-sonnet-4-20250514",
    costPerPost: "~$0.02",
    freeTier: false,
    buildRequest: (sys, user, key) => ({
      url: "https://api.anthropic.com/v1/messages",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4096,
          system: sys,
          messages: [{ role: "user", content: user }],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as { content: { type: string; text: string }[] };
      const text = resp.content?.find((b) => b.type === "text");
      return text?.text ?? "";
    },
  },
  gemini: {
    name: "Google Gemini",
    envKey: "GEMINI_API_KEY",
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models",
    model: "gemini-2.0-flash",
    costPerPost: "~$0.001 (free tier available)",
    freeTier: true,
    buildRequest: (sys, user, key) => ({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: sys }] },
          contents: [{ parts: [{ text: user }] }],
          generationConfig: { maxOutputTokens: 4096, temperature: 0.7 },
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as {
        candidates: { content: { parts: { text: string }[] } }[];
      };
      return resp.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    },
  },
  openai: {
    name: "OpenAI",
    envKey: "OPENAI_API_KEY",
    endpoint: "https://api.openai.com/v1/chat/completions",
    model: "gpt-4o-mini",
    costPerPost: "~$0.001",
    freeTier: false,
    buildRequest: (sys, user, key) => ({
      url: "https://api.openai.com/v1/chat/completions",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 4096,
          temperature: 0.7,
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as {
        choices: { message: { content: string } }[];
      };
      return resp.choices?.[0]?.message?.content ?? "";
    },
  },
  groq: {
    name: "Groq",
    envKey: "GROQ_API_KEY",
    endpoint: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile",
    costPerPost: "~$0.002 (free tier available)",
    freeTier: true,
    buildRequest: (sys, user, key) => ({
      url: "https://api.groq.com/openai/v1/chat/completions",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 4096,
          temperature: 0.7,
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as {
        choices: { message: { content: string } }[];
      };
      return resp.choices?.[0]?.message?.content ?? "";
    },
  },
  deepseek: {
    name: "DeepSeek",
    envKey: "DEEPSEEK_API_KEY",
    endpoint: "https://api.deepseek.com/v1/chat/completions",
    model: "deepseek-chat",
    costPerPost: "~$0.001",
    freeTier: false,
    buildRequest: (sys, user, key) => ({
      url: "https://api.deepseek.com/v1/chat/completions",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          max_tokens: 4096,
          temperature: 0.7,
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as {
        choices: { message: { content: string } }[];
      };
      return resp.choices?.[0]?.message?.content ?? "";
    },
  },
  mistral: {
    name: "Mistral",
    envKey: "MISTRAL_API_KEY",
    endpoint: "https://api.mistral.ai/v1/chat/completions",
    model: "mistral-small-latest",
    costPerPost: "~$0.003 (free tier available)",
    freeTier: true,
    buildRequest: (sys, user, key) => ({
      url: "https://api.mistral.ai/v1/chat/completions",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          max_tokens: 4096,
          temperature: 0.7,
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as {
        choices: { message: { content: string } }[];
      };
      return resp.choices?.[0]?.message?.content ?? "";
    },
  },
  ollama: {
    name: "Ollama (Local)",
    envKey: "",
    endpoint: "http://localhost:11434/api/chat",
    model: "llama3.2",
    costPerPost: "$0 (runs locally)",
    freeTier: true,
    buildRequest: (sys, user) => ({
      url: "http://localhost:11434/api/chat",
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2",
          stream: false,
          messages: [
            { role: "system", content: sys },
            { role: "user", content: user },
          ],
        }),
      },
    }),
    parseResponse: (json: unknown) => {
      const resp = json as { message: { content: string } };
      return resp.message?.content ?? "";
    },
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Technology: "bg-primary/10 text-primary",
  Agriculture: "bg-green-100 text-green-800",
  "Carbon Markets": "bg-amber-100 text-amber-800",
  Biofuels: "bg-accent/10 text-accent",
  "Water Management": "bg-blue-100 text-blue-800",
  Business: "bg-purple-100 text-purple-800",
  Policy: "bg-rose-100 text-rose-800",
  Industry: "bg-indigo-100 text-indigo-800",
  Sustainability: "bg-emerald-100 text-emerald-800",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TopicCategory {
  name: string;
  blogCategory: string;
  topics: string[];
}

interface TopicsData {
  categories: TopicCategory[];
  recentlyUsed: string[];
}

interface BlogPostData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  targetKeyword: string;
  date: string;
  sections: {
    heading: string;
    content: string;
  }[];
  ctaHeading: string;
  ctaDescription: string;
  relatedSlugs: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function parseArgs(): { topic?: string; provider?: ProviderName } {
  const args = process.argv.slice(2);
  const result: { topic?: string; provider?: ProviderName } = {};

  const topicIndex = args.indexOf("--topic");
  if (topicIndex !== -1 && args[topicIndex + 1]) {
    result.topic = args.slice(topicIndex + 1).join(" ");
    // Remove --provider from topic if it got swept in
    const providerFlag = result.topic.indexOf("--provider");
    if (providerFlag !== -1) {
      result.topic = result.topic.slice(0, providerFlag).trim();
    }
  }

  const providerIndex = args.indexOf("--provider");
  if (providerIndex !== -1 && args[providerIndex + 1]) {
    result.provider = args[providerIndex + 1] as ProviderName;
  }

  return result;
}

function loadTopics(): TopicsData {
  const raw = fs.readFileSync(TOPICS_FILE, "utf-8");
  return JSON.parse(raw) as TopicsData;
}

function saveTopics(data: TopicsData): void {
  fs.writeFileSync(TOPICS_FILE, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

function pickTopic(data: TopicsData): { topic: string; blogCategory: string } {
  const recent = new Set(data.recentlyUsed);
  for (const cat of data.categories) {
    for (const topic of cat.topics) {
      if (!recent.has(topic)) {
        return { topic, blogCategory: cat.blogCategory };
      }
    }
  }
  data.recentlyUsed = [];
  const first = data.categories[0];
  return { topic: first.topics[0], blogCategory: first.blogCategory };
}

function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDateHuman(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getExistingPosts(): { slug: string; title: string; category: string }[] {
  const src = fs.readFileSync(BLOG_INDEX_FILE, "utf-8");
  const posts: { slug: string; title: string; category: string }[] = [];
  const match = src.match(/const blogPosts\s*=\s*\[([\s\S]*?)\];/);
  if (!match) return posts;
  const slugMatches = [...match[1].matchAll(/slug:\s*"([^"]+)"/g)];
  const titleMatches = [...match[1].matchAll(/title:\s*\n?\s*"([^"]+)"/g)];
  const catMatches = [...match[1].matchAll(/category:\s*"([^"]+)"/g)];
  for (let i = 0; i < slugMatches.length; i++) {
    posts.push({
      slug: slugMatches[i][1],
      title: titleMatches[i]?.[1] ?? "",
      category: catMatches[i]?.[1] ?? "Technology",
    });
  }
  return posts;
}

function pickRelatedPosts(
  existingPosts: { slug: string; title: string; category: string }[],
  newSlug: string,
  targetCategory: string
): { slug: string; title: string; category: string }[] {
  const sameCategory = existingPosts.filter(
    (p) => p.category === targetCategory && p.slug !== newSlug
  );
  const otherCategory = existingPosts.filter(
    (p) => p.category !== targetCategory && p.slug !== newSlug
  );
  const related: { slug: string; title: string; category: string }[] = [];
  for (const p of [...sameCategory, ...otherCategory]) {
    if (related.length >= 3) break;
    related.push(p);
  }
  return related;
}

// ---------------------------------------------------------------------------
// Detect which provider to use
// ---------------------------------------------------------------------------

function detectProvider(preferred?: ProviderName): ProviderConfig {
  // 1. Explicit --provider flag or AI_PROVIDER env
  const providerName =
    preferred ?? (process.env.AI_PROVIDER as ProviderName | undefined);

  if (providerName && PROVIDERS[providerName]) {
    const p = PROVIDERS[providerName];
    if (p.envKey && !process.env[p.envKey]) {
      console.error(
        `Error: Provider "${providerName}" requires ${p.envKey} environment variable.`
      );
      process.exit(1);
    }
    return p;
  }

  // 2. Auto-detect from available API keys (priority order)
  const priority: ProviderName[] = [
    "gemini",    // Free tier — check first
    "groq",      // Free tier
    "mistral",   // Free tier
    "deepseek",  // Cheapest paid
    "openai",    // Widely used
    "anthropic", // Best quality
  ];

  for (const name of priority) {
    const p = PROVIDERS[name];
    if (process.env[p.envKey]) {
      console.log(
        `Auto-detected provider: ${p.name} (${p.costPerPost})`
      );
      return p;
    }
  }

  // 3. Try Ollama (local, no key needed)
  console.log(
    "No API keys found. Trying Ollama (local) at http://localhost:11434..."
  );
  return PROVIDERS.ollama;
}

// ---------------------------------------------------------------------------
// AI Generation — provider-agnostic
// ---------------------------------------------------------------------------

async function generateWithAI(
  provider: ProviderConfig,
  topic: string,
  blogCategory: string,
  existingTitles: string[]
): Promise<BlogPostData> {
  const apiKey = provider.envKey ? process.env[provider.envKey] ?? "" : "";

  const systemPrompt = `You are a blog content generator for iNBIO (International BioRefineries Inc.), a company that designs and builds modular fast pyrolysis systems that convert waste biomass into bio-oil, biochar, and syngas.

The blog is written from the perspective of Raj Kathuria, the founder. The tone is:
- First-person ("we", "our", "I"), practical, and direct
- Honest and transparent — acknowledges limitations and trade-offs
- Includes specific numbers, data points, and dollar figures where relevant
- Conversational but authoritative — like talking to a knowledgeable colleague
- No marketing fluff — every claim is grounded in specifics
- References iNBIO products/services naturally, not as a sales pitch

iNBIO key offerings:
- Modular fast pyrolysis systems (5-75 TPD capacity)
- Biochar production and sales (IBI/EBC certified)
- Bio-oil production
- Carbon credit consulting (Puro.earth, Verra)
- Located in Salisbury, MD, serving North America

Existing blog titles (avoid duplicating):
${existingTitles.map((t) => `- ${t}`).join("\n")}`;

  const userPrompt = `Generate a complete blog post about: "${topic}"

Category: ${blogCategory}

Return a JSON object with this exact structure (no markdown code fences, just raw JSON):
{
  "slug": "url-friendly-slug-max-50-chars",
  "title": "Full Blog Post Title (compelling, under 70 chars)",
  "metaTitle": "SEO Title Under 60 Chars | iNBIO",
  "metaDescription": "SEO meta description under 160 characters with target keyword.",
  "excerpt": "2-3 sentence excerpt for the blog index card.",
  "category": "${blogCategory}",
  "targetKeyword": "primary SEO keyword phrase",
  "sections": [
    {
      "heading": "Section Heading",
      "content": "Section content in plain text. Use \\n\\n for paragraph breaks. Each section 200-400 words. Write 6-8 sections for 1500-2500 words total. Include specific numbers, data, practical insights."
    }
  ],
  "ctaHeading": "Call-to-action heading",
  "ctaDescription": "1-2 sentence CTA description"
}

Important:
- Write 6-8 substantive sections (1500-2500 words total)
- Include specific numbers: dollar figures, percentages, tonnages, timelines
- Reference real programs, standards, or market data
- Opening paragraph should hook with a specific insight
- Use &apos; for apostrophes, &amp; for ampersands in content`;

  console.log(`\nUsing provider: ${provider.name} (${provider.model})`);
  console.log(`Cost per post: ${provider.costPerPost}`);
  console.log(`Generating post about: "${topic}"...\n`);

  const { url, options } = provider.buildRequest(systemPrompt, userPrompt, apiKey);

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `${provider.name} API error (${response.status}): ${errorText}`
    );
  }

  const json = await response.json();
  let text = provider.parseResponse(json);

  // Strip markdown code fences if present
  text = text.trim();
  if (text.startsWith("```")) {
    text = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  const data = JSON.parse(text) as BlogPostData;
  data.date = todayISO();

  return data;
}

// ---------------------------------------------------------------------------
// File generation — create the Next.js page.tsx
// ---------------------------------------------------------------------------

function buildPageContent(
  post: BlogPostData,
  relatedPosts: { slug: string; title: string; category: string }[]
): string {
  const dateFormatted = formatDateHuman(post.date);

  const sectionsJSX = post.sections
    .map((section) => {
      const paragraphs = section.content
        .split("\n\n")
        .filter((p) => p.trim())
        .map(
          (p) =>
            `            <p className="mt-6 text-text-light leading-relaxed">\n              ${p.trim()}\n            </p>`
        )
        .join("\n\n");
      return `
            <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-text">
              ${section.heading}
            </h2>

${paragraphs}`;
    })
    .join("\n");

  const relatedPostsJSX = relatedPosts
    .map((rp) => {
      const colorClass =
        CATEGORY_COLORS[rp.category] || "bg-primary/10 text-primary";
      return `            <Link
              href="/blog/${rp.slug}"
              className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full ${colorClass} mb-3">
                ${rp.category}
              </span>
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                ${rp.title}
              </h3>
            </Link>`;
    })
    .join("\n");

  const categoryColor =
    CATEGORY_COLORS[post.category] || "bg-white/20 text-white";

  const funcName =
    "BlogPost" +
    post.slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");

  return `import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: ${JSON.stringify(post.metaTitle)},
  description:
    ${JSON.stringify(post.metaDescription)},
};

export default function ${funcName}() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColor}">
                ${post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              ${post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="font-medium text-white/90">Raj Kathuria</span>
              <span>&middot;</span>
              <time dateTime="${post.date}">${dateFormatted}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 rounded-xl bg-surface-dark border border-border h-64 sm:h-80 flex items-center justify-center">
            <p className="text-text-lighter text-sm">Featured image: ${post.title}</p>
          </div>

          <div className="prose prose-lg max-w-none">
${sectionsJSX}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Related Posts</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
${relatedPostsJSX}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">${post.ctaHeading}</h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">${post.ctaDescription}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 text-base font-semibold bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
`;
}

// ---------------------------------------------------------------------------
// Blog index updater
// ---------------------------------------------------------------------------

function addPostToIndex(post: BlogPostData): void {
  let src = fs.readFileSync(BLOG_INDEX_FILE, "utf-8");

  const newEntry = `  {
    slug: "${post.slug}",
    title:
      "${post.title}",
    excerpt:
      "${post.excerpt}",
    date: "${post.date}",
    category: "${post.category}",
  },\n  `;

  const insertPoint = "const blogPosts = [\n";
  if (src.includes(insertPoint)) {
    src = src.replace(insertPoint, insertPoint + newEntry);
  } else {
    console.warn(
      "Warning: Could not find blogPosts array in blog index. Add the entry manually."
    );
  }

  fs.writeFileSync(BLOG_INDEX_FILE, src, "utf-8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== iNBIO Blog Post Generator ===");
  console.log("=== Multi-Provider Edition ===\n");

  // Show available providers
  console.log("Available providers:");
  for (const [key, p] of Object.entries(PROVIDERS)) {
    const hasKey = p.envKey ? !!process.env[p.envKey] : key === "ollama";
    const status = hasKey ? "ready" : "no key";
    const free = p.freeTier ? " [FREE TIER]" : "";
    console.log(
      `  ${key.padEnd(12)} ${p.name.padEnd(20)} ${p.costPerPost.padEnd(35)} ${status}${free}`
    );
  }
  console.log("");

  const { topic: cliTopic, provider: cliProvider } = parseArgs();

  // Detect provider
  const provider = detectProvider(cliProvider);

  // Load topics
  const topicsData = loadTopics();

  // Pick topic
  let topic: string;
  let blogCategory: string;
  if (cliTopic) {
    topic = cliTopic;
    blogCategory = "Technology";
    for (const cat of topicsData.categories) {
      if (
        cat.topics.some((t) =>
          t.toLowerCase().includes(cliTopic.toLowerCase())
        )
      ) {
        blogCategory = cat.blogCategory;
        break;
      }
    }
    console.log(`Using provided topic: "${topic}" (category: ${blogCategory})`);
  } else {
    const picked = pickTopic(topicsData);
    topic = picked.topic;
    blogCategory = picked.blogCategory;
    console.log(
      `Auto-selected topic: "${topic}" (category: ${blogCategory})`
    );
  }

  // Get existing posts
  const existingPosts = getExistingPosts();
  const existingTitles = existingPosts.map((p) => p.title);

  // Generate content
  const postData = await generateWithAI(
    provider,
    topic,
    blogCategory,
    existingTitles
  );

  // Pick related posts
  const relatedPosts = pickRelatedPosts(
    existingPosts,
    postData.slug,
    postData.category
  );
  postData.relatedSlugs = relatedPosts.map((rp) => rp.slug);

  // Create blog post file
  const postDir = path.join(BLOG_DIR, postData.slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }
  const pageContent = buildPageContent(postData, relatedPosts);
  const pagePath = path.join(postDir, "page.tsx");
  fs.writeFileSync(pagePath, pageContent, "utf-8");
  console.log(`\nCreated blog post: ${pagePath}`);

  // Update blog index
  addPostToIndex(postData);
  console.log(`Updated blog index: ${BLOG_INDEX_FILE}`);

  // Track used topic
  topicsData.recentlyUsed.push(topic);
  if (topicsData.recentlyUsed.length > 30) {
    topicsData.recentlyUsed = topicsData.recentlyUsed.slice(-30);
  }
  saveTopics(topicsData);

  // Summary
  console.log("\n=== Blog Post Summary ===");
  console.log(`Provider:    ${provider.name} (${provider.costPerPost})`);
  console.log(`Title:       ${postData.title}`);
  console.log(`Slug:        ${postData.slug}`);
  console.log(`Category:    ${postData.category}`);
  console.log(`Keyword:     ${postData.targetKeyword}`);
  console.log(`Meta Title:  ${postData.metaTitle}`);
  console.log(`Date:        ${postData.date}`);
  console.log(`Sections:    ${postData.sections.length}`);
  console.log(`File:        ${pagePath}`);
  console.log(`URL:         /blog/${postData.slug}`);
  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Error generating blog post:", err);
  process.exit(1);
});
