# EarthPulse AI: UX/UI case study (simple static site)

One page with nine sections of text and 13 image slots. No React, no TypeScript, nothing to install.
Files: `index.html` (all the text), `style.css` (the look), `images/` (your pictures),
`build.mjs` + `package.json` + `vercel.json` (tiny build so Vercel deploys it).

## Deploy (about 5 minutes)

1. Create a **new, empty GitHub repository**.
2. Click **Add file → Upload files**, drag in **everything from this folder** (all files and the `images` folder), then **Commit changes**. This folder has 20 files, well under GitHub's 100-file limit.
3. In Vercel: **Add New → Project**, pick the repository, and click **Deploy**. Leave the settings as they are.
4. If you reuse an existing Vercel project instead: **Settings → General**, set *Framework Preset* to **Other**, *Build Command* to `npm run build`, *Output Directory* to `dist`, and leave *Root Directory* empty.

## Change the text

Open `index.html` on GitHub and click the pencil icon. Search for the words you want to change. The text is plain HTML, so edit between the tags and leave the tags alone. Lines marked `<!-- EDIT -->` (Role, Timeline, Tools) and the note "How this was made" are meant for you to rewrite so they say exactly what you did.

## Add your images

Each image slot is a labelled placeholder that says what to put there. To replace one:
1. Export your picture (from Figma, for example) as **PNG**.
2. Name it exactly like the placeholder, for example `09-solution-dashboard.png`.
3. Upload it into the `images` folder on GitHub. It replaces the old file, and the page updates after Vercel redeploys.

| File | Put here |
|---|---|
| 01-problem | Problem-framing board or sketch |
| 02-constraints | Constraints and trade-offs diagram |
| 03-research | Research plan or competitor comparison |
| 04-strategy | MVP or feature-priority board |
| 05-exploration-a | Onboarding sketches or wireframes |
| 05-exploration-b | Dashboard sketches or wireframes |
| 06-design-system-colour | Colour palette and type specimen |
| 06-design-system-components | Component sheet |
| 07-flows-1 | User-flow diagram |
| 07-flows-2 | Key screens |
| 08-impact | Metrics or measurement plan |
| 09-solution-dashboard | Desktop dashboard screenshot |
| 09-solution-mobile | Mobile screenshots |

## Keep it honest

The page says clearly that no user research has been done yet. When you run your session, update section 3 ("Findings") and say how many people each finding came from. Don't add numbers or quotes you didn't collect.
