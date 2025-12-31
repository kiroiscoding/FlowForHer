## Deploy "Flow for Her" to GitHub Pages

This project is a static export Next.js app (`output: "export"`) and can be hosted on GitHub Pages.

### 1) Push this repo to GitHub
- Create (or reuse) a GitHub repo.
- Push this code to the repo’s `main` branch.

### 2) Enable GitHub Pages (Actions)
In your GitHub repo:
- Go to **Settings → Pages**
- Under **Build and deployment**:
  - **Source**: select **GitHub Actions**

### 2.5) If you are using a custom domain
1) Create a file at `public/CNAME` containing ONLY your domain, e.g.:
- `flowforher.org`  (apex) OR
- `www.flowforher.org` (subdomain)

2) In GitHub: **Settings → Pages → Custom domain**
- Enter the same domain
- Save, then enable **Enforce HTTPS** once it becomes available

### 3) First deploy
- Push to `main`.
- Go to **Actions** tab → watch **Deploy to GitHub Pages** workflow.
- Once green, your site will be available at:
  - `https://<your-username>.github.io/<repo-name>/`

### 4) If you’re replacing an old Pages site
If your old repo already has Pages enabled:
- Either disable Pages there, or point your domain to this new repo (if you use a custom domain).
- In the repo you want to be live, keep Pages enabled with **Source: GitHub Actions**.

### Notes
- The workflow automatically sets `NEXT_PUBLIC_BASE_PATH` to `/<repo-name>` so routes/assets work under GitHub Pages.
- If `public/CNAME` exists, the workflow automatically uses an **empty basePath** (required for custom domains).
- If you later add `next/image` with optimized images, keep `images.unoptimized: true` for Pages.
