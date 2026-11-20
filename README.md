# AI Text Sanitizer

A standalone, browser-based editorial utility for cleaning text and reviewing writing quality. It runs locally in the browser and does not require an account, server, API key, build step, or external JavaScript dependency.

**Live demo:** After enabling GitHub Pages, add the published URL here.

## Features

The app includes five tools:

1. **Sanitize**: inspect and clean selected invisible Unicode characters, spacing and formatting residue, typographic patterns, and other configured text artifacts.
2. **Style Review**: identify patterns against a rule-based editorial style guide.
3. **Voice Match**: compare measurable writing characteristics against a user-provided voice sample.
4. **Sources**: compare a draft against source text supplied by the user and highlight overlapping passages.
5. **Publish Check**: flag configured placeholders, claims, structure and publishing checks.

The Sanitize panel has two modes:
- **Quick cleanup** applies the recommended defaults.
- **Customize setup** exposes the full settings tree. Each category is collapsed until opened.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Paste text into the relevant tool and review the output.

Some browser clipboard features work only on secure origins such as `https://` or `http://localhost`. The core text processing works locally.

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `ai-text-sanitizer`.
2. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
3. Open the repository's **Settings**.
4. Select **Pages** from the left navigation.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then click **Save**.
7. Wait for GitHub Pages to publish. The Pages screen will show the public website URL, usually:
   `https://YOUR-GITHUB-USERNAME.github.io/ai-text-sanitizer/`

To update the website later, replace `index.html` with the new version and commit the change. GitHub Pages will publish the update automatically.

## Upload using GitHub's website

1. Sign in at https://github.com.
2. Click **New repository**.
3. Enter `ai-text-sanitizer` as the repository name.
4. Choose **Public** or **Private**. GitHub Pages availability and access depend on your GitHub plan and repository visibility.
5. Create the repository.
6. Choose **Add file → Upload files**.
7. Drag `index.html`, `README.md`, `LICENSE`, `THIRD_PARTY_NOTICES.md`, `.gitignore`, `.nojekyll`, `CHANGELOG.md`, `package.json`, and the `scripts` folder into the upload area.
8. Enter a commit message such as `Initial release of AI Text Sanitizer`.
9. Click **Commit changes**.
10. Follow the GitHub Pages steps above.

## Upload using Git

If Git is installed, run these commands from this folder:

```bash
git init
git add .
git commit -m "Initial release of AI Text Sanitizer"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/ai-text-sanitizer.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username. If the repository already exists and has commits, follow GitHub's instructions for connecting an existing local repository.

## Privacy

The application is designed to process the text in the browser. It does not send the draft to a remote analysis API. Optional voice-profile measurements are stored in the browser's local storage when the user chooses to save them. Clearing the browser's site data removes that local profile.

The GitHub Pages website itself is downloaded from GitHub when opened. The app's text-processing logic remains client-side.

## Methodology and limitations

The app uses deterministic text transformations and rule-based editorial heuristics. Findings indicate that a configured rule matched or a measurable feature was observed. They are not proof of AI authorship, plagiarism, factual accuracy, legal compliance, or search performance.

- Cleanup changes should be reviewed before publishing, especially when working with multilingual text, emoji, technical identifiers or specialized typography.
- Style findings are editorial prompts and can produce false positives or miss context-dependent patterns.
- Voice Match compares measurable features. It does not prove who wrote a text.
- Source Overlap compares only the draft and sources provided by the user. It is not a web-wide plagiarism search.
- Publish Check flags configured patterns. It does not independently verify claims or sources.

## Credits

Created by **Avik Bal**  
LinkedIn: https://www.linkedin.com/in/avikbal/

The editorial rules reference the **Anti-AI Writing Style** project:  
https://github.com/avikbal-dm/anti-ai-writing-claude-skill

See `THIRD_PARTY_NOTICES.md` for attribution and licensing notes.

## License

This repository is distributed under the MIT License. See `LICENSE`.
