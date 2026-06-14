# ROSEPlatform

Vite + React landing page prepared for Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the Vercel defaults:
   - Framework Preset: Vite
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

The `vercel.json` file already defines these values and includes a single-page app rewrite to `index.html`.
