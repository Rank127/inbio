# iNBIO Deployment Guide -- Hostinger

Step-by-step instructions for deploying the iNBIO Next.js site to Hostinger.

---

## 1. Push to GitHub

```bash
cd site/
git init
git add .
git commit -m "Initial commit: iNBIO Next.js site"
git remote add origin https://github.com/RajKathuria/inbio.git
git push -u origin main
```

---

## 2. Add Website in Hostinger

1. Log in to Hostinger hPanel.
2. Navigate to **Websites** > **Add Website** > **Node.js Apps**.
3. Select the domain **inbio.net**.

---

## 3. Connect GitHub Repository

1. In the Node.js app settings, click **Connect to GitHub**.
2. Authorize Hostinger to access the repository.
3. Select the **RajKathuria/inbio** repository.
4. Set the root directory to `/site` (the Next.js project lives inside the site subdirectory).

---

## 4. Build Settings

Configure the following in Hostinger's build settings panel:

| Setting | Value |
|---------|-------|
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm run start -- -p $PORT` |
| Node.js version | 18.x or 20.x (LTS) |

---

## 5. Environment Variables

Set these in the Hostinger dashboard under **Environment Variables**:

| Variable | Value | Notes |
|----------|-------|-------|
| `ANTHROPIC_API_KEY` | (your API key) | For AI-powered features |
| `CONTACT_EMAIL` | `Raj@inbio.net` | Form submission recipient |
| `WHATSAPP_NUMBER` | (your number) | WhatsApp click-to-chat button |
| `NODE_ENV` | `production` | Required for production builds |

**Never commit .env files to the repository.** All secrets must be set in the Hostinger dashboard.

---

## 6. DNS Configuration

No DNS changes are needed if the domain is already pointing to Hostinger.

- **A / CNAME records**: Should already point to Hostinger's servers.
- **MX records**: Leave untouched -- these handle Google Workspace email for @inbio.net.
- **Verify**: After deployment, confirm that https://inbio.net and https://www.inbio.net both resolve correctly.

---

## 7. Post-Deploy Checklist

Run through each item after the first successful deployment:

- [ ] **All pages load** -- Visit every route and confirm no 404s or 500s
- [ ] **Test all 3 forms** -- Contact form, feedstock assessment form, sample request form
- [ ] **Submit sitemap** -- Go to Google Search Console > Sitemaps > submit `https://inbio.net/sitemap.xml`
- [ ] **WhatsApp button** -- Verify the floating WhatsApp button opens the correct chat
- [ ] **301 redirects** -- Confirm old WordPress URLs redirect to new Next.js routes:
  - `/our-technology/` -> `/technology`
  - `/fast-pyrolysis-specs/` -> `/technology`
  - `/biofuels/` -> `/biofuels`
  - `/biofuel-applications/` -> `/biofuels`
  - `/biochar/` -> `/biochar`
  - `/biochar-applications/` -> `/biochar`
  - `/main/` -> `/blog`
  - `/exploring-fast-pyrolysis-technology-for-biomass-waste-to-biochar/` -> `/blog/fast-pyrolysis-biomass-to-biochar`
- [ ] **HTTPS active** -- Confirm SSL certificate is installed and HTTP redirects to HTTPS
- [ ] **OG images** -- Share a page URL on LinkedIn or Facebook and verify the preview image appears
- [ ] **Performance** -- Run Lighthouse audit; target 90+ on Performance, Accessibility, SEO
- [ ] **Analytics** -- Verify Google Analytics / Search Console are receiving data

---

## Redeployment

Subsequent deployments happen automatically when you push to the `main` branch on GitHub. Hostinger will:

1. Pull the latest code
2. Run `npm ci`
3. Run `npm run build`
4. Restart the app with `npm run start -- -p $PORT`

To trigger a manual redeploy, go to hPanel > your site > Node.js app > **Redeploy**.

---

## Rollback

If a deployment breaks the site:

1. In hPanel, go to **Deployments** and select the previous working deployment.
2. Click **Redeploy** on that version.
3. Alternatively, revert the commit on GitHub and push to trigger a new build.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check build logs in hPanel; common cause is missing dependencies or Node version mismatch |
| 502 Bad Gateway | App may not be listening on `$PORT`; verify start command uses `-- -p $PORT` |
| Forms not sending | Check that `CONTACT_EMAIL` env var is set and API route is deployed |
| Images not loading | Verify images exist in `public/images/` and paths match component `src` props |
| Slow initial load | Run `npm run build` locally to verify no SSR errors; check for large unoptimized images |
