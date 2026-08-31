# Aerospace engineering portfolio

A responsive, data-driven Jekyll portfolio designed for GitHub Pages. It uses Liquid collections, YAML data, Markdown project pages, SCSS, and lightweight vanilla JavaScript.

## 1. Create the GitHub repository

For the cleanest URL, create a public repository named `YOUR-USERNAME.github.io`. Upload the **contents** of this folder to the repository root—not the enclosing folder itself.

If you use a project repository such as `portfolio`, set these values in `_config.yml`:

```yml
url: "https://YOUR-USERNAME.github.io"
baseurl: "/portfolio"
```

## 2. Personalize the content

1. Edit `_data/profile.yml` for your name, headline, links, bio, and metrics.
2. Edit `_data/experience.yml` for internships, research, and team roles.
3. Edit `_data/skills.yml` for your technical focus and tools.
4. Replace the sample Markdown files in `_projects/` with your projects. Keep the front matter at the top of each file.
5. Replace `assets/images/orbital-horizon.png` with your own image using the same filename, or change the image path in `index.html`.
6. The integrated résumé is at `assets/documents/resume.pdf`. Replace that file with the same filename whenever you revise it.

Tip: write every project around a question. Show assumptions, analysis, evidence, and your individual contribution.

## 3. Enable GitHub Pages

1. Push or upload all files to the repository's default branch.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose your default branch and the `/ (root)` folder, then save.
5. Wait a few minutes for the first deployment. GitHub will show the live URL on the same page.

Do not add a `.nojekyll` file. This version intentionally uses Jekyll.

## 4. Preview locally (optional)

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. For a project repository, preview with:

```sh
bundle exec jekyll serve --baseurl "/portfolio"
```

## Editing cheatsheet

- Reorder projects: change `order:` in each `_projects/*.md` file.
- Add a project: duplicate a project Markdown file and change its filename/front matter.
- Update the résumé: replace `assets/documents/resume.pdf` and keep the filename unchanged.
- Change colors: edit the variables at the top of `assets/css/main.scss`.
- Tune parallax strength: change `PARALLAX_TRAVEL` in `assets/js/main.js`.
- Adjust when deceleration begins: change `BRAKE_START` in `assets/js/main.js`.
- Adjust where imagery ends: change `.visual-zone` height in `assets/css/main.scss`.
- Change fonts: replace the Google Fonts link in `_layouts/default.html` and the font-family rules in the SCSS.

## Why native Jekyll

GitHub Pages builds this setup directly, with no Node, Python, or deployment action required. Liquid and YAML keep repeated content editable; collections give every project its own URL; SCSS is compiled by Jekyll; and JavaScript is reserved for progressive visual effects. This is simpler to maintain than disabling Jekyll for a framework while still using the platform's strongest native features.
