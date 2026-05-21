# Youssef Mecky — Personal Site

Single-page static CV / portfolio site. Plain HTML, CSS, and a tiny bit of vanilla JS — no build step, no dependencies.

## Run locally

Either open `index.html` directly in a browser, or serve it (recommended, so the PDF download works from a real URL):

```bash
cd "/Users/youssefmecky/Desktop/CV website"
python3 -m http.server 8000
# then open http://localhost:8000
```

## File layout

```
.
├── index.html      # all markup
├── styles.css      # design system + responsive layout
├── script.js       # dark-mode toggle, nav scroll-spy, footer year
├── assets/
│   ├── CV_YoussefMecky.pdf   # downloadable CV (linked from header)
│   ├── favicon.svg
│   └── photo.jpg             # optional profile photo (see below)
└── README.md
```

## Add a profile photo (optional)

Drop a square photo at `assets/photo.jpg` (e.g. 480×480). Then replace the `<div class="hero-photo">` placeholder in `index.html` with:

```html
<div class="hero-photo">
  <img src="assets/photo.jpg" alt="Portrait of Youssef Mecky" class="photo-img" />
</div>
```

And add to `styles.css`:

```css
.photo-img {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}
@media (max-width: 880px) {
  .photo-img { width: 180px; height: 180px; }
}
```

## Deploy to GitHub Pages

1. Create a new repo. For a personal site at the root URL, name it `youssefmecky96.github.io`; otherwise pick any name for a project site.
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:youssefmecky96/<repo>.git
   git push -u origin main
   ```
3. On GitHub, open the repo → **Settings → Pages** → set source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Site is live at `https://youssefmecky96.github.io/` (user site) or `https://youssefmecky96.github.io/<repo>/` (project site).

### Custom domain (optional)
Add a `CNAME` file at the repo root containing your domain (e.g. `youssefmecky.com`), and point a DNS `CNAME` record at `youssefmecky96.github.io`.

## Updating content

All copy lives in `index.html` (sections are clearly commented `<!-- 01 / About -->` etc.). For new experience, copy an existing `.experience-item` block. For new publications, copy a `.publication-item` block.
