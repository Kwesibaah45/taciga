# The Apostolic Church International — Georgia District

Official website for the Georgia District: **Austell Assembly** and **Gwinnett International Assembly**.

It is a static site (plain HTML, CSS and JavaScript). No build step, no server code and no packages to install, so it runs on GitHub Pages for free.

## What's in this folder

```
taci-georgia-district/
├── index.html          ← page structure and content (all pages)
├── 404.html            ← sends broken links back to the home page
├── .nojekyll           ← tells GitHub Pages to serve files as-is (keep it)
├── README.md           ← this file
└── assets/
    ├── css/styles.css  ← all colors, fonts, layout and animations
    ├── js/script.js    ← church details, photo albums, viewer, animations
    ├── images/         ← logo, buildings, leaders, event photos
    └── videos/         ← LoveFest and worship videos
```

## Publish on GitHub Pages

### Option A: In the browser (no coding)

1. Sign in at **github.com** and click **New repository**.
2. Name it, for example `taci-georgia-district`. Set it to **Public**, then click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip the package on your computer. Open the `taci-georgia-district` folder, select **everything inside it**, and drag it into the upload box. Include the `assets` folder, `index.html`, `404.html` and `.nojekyll`.
   - On a Mac, press `Cmd + Shift + .` in Finder to show the hidden `.nojekyll` file.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, folder `/ (root)`. Then click **Save**.
7. Wait 1–2 minutes and refresh. GitHub shows your live link:
   `https://YOUR-USERNAME.github.io/taci-georgia-district/`

### Option B: With Git (command line)

```bash
cd taci-georgia-district
git init
git add .
git commit -m "Launch TACI Georgia District website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/taci-georgia-district.git
git push -u origin main
```

Then do step 6 above to turn on Pages.

## Use your own domain (optional)

To use an address like `www.tacigeorgia.org`:

1. Buy the domain from any registrar (Namecheap, GoDaddy, Google Domains, Hostinger, etc.).
2. In the repository, go to **Settings → Pages → Custom domain**, type the domain and click **Save**. GitHub creates a `CNAME` file for you.
3. At your registrar, add these DNS records:
   - `CNAME` record: host `www`, value `YOUR-USERNAME.github.io`
   - `A` records for the bare domain (`@`): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes available (DNS can take up to 24 hours).

## Updating the site

Most church details are in one block near the top of `assets/js/script.js`. Search for `EDIT HERE`. That block holds:

| What | Look for |
|---|---|
| Addresses, phone, email, service times | `const ASSEMBLIES` |
| Zoom link and passcode | `const ZOOM` |
| Cash App tag | `const CASHAPP_TAG` |
| Leadership chart | `const LEADERS` |
| Core values | `const CORE_VALUES` |
| Tenets | `const TENETS` |
| Ministries | `const MINISTRIES` |
| Events list | `const EVENTS` |
| Photo and video albums | `const ALBUMS` and `const PHOTOS` |

Colors are at the top of `assets/css/styles.css` (`--ember`, `--glow`, `--apricot`, `--cream`). Change them there and the whole site updates.

**To add photos:** upload them into `assets/images/`. Then add a line to `PHOTOS`, for example:

```js
{ src: "assets/images/new-photo.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
```

Resize photos to about 1600px on the longest side before uploading, so the site stays fast. GitHub rejects any single file over 100 MB.

After editing in GitHub, click **Commit changes**. The live site updates within a minute or two.

## Things to finish before launch

- **"Our story" (About page):** still a placeholder. Add the district's history.
- **"Plan a visit" form:** shows a message but does not send email yet. To make it deliver messages, connect a free form service such as Formspree or Netlify Forms, or replace it with a link to `mailto:apostolicatlantabranch@gmail.com`.
- **Events page:** the three events are samples. Replace them in `const EVENTS`.
- **Zoom passcode:** it is public on the site. Consider turning on the Zoom waiting room.
