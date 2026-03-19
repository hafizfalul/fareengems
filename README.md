# Fareen Gems - Premium Static Website

Welcome to the source code for the Fareen Gems website. This is a highly optimized, fully responsive static website (HTML, CSS, JS) designed for zero-maintenance hosting on GitHub Pages.

## 🚀 How to Deploy on GitHub Pages

Since this website uses static files (HTML, CSS, JavaScript), hosting it on GitHub Pages is incredibly simple and entirely free.

1. **Create a GitHub Repository:**
   - Go to [github.com](https://github.com) and log in.
   - Click the **"+"** icon in the top right corner and select **"New repository"**.
   - Name it (e.g., `fareengems.github.io` or `fareen-gems-website`).
   - Make it **Public**.
   - Click **"Create repository"**.

2. **Upload Your Files:**
   - On your computer, open the folder containing these website files.
   - You can simply **drag and drop** all the files (including `index.html`, `css` folder, `js` folder, etc.) directly into the GitHub repository page in your browser.
   - Wait for the upload to finish, add a commit message (like "Initial commit"), and click **"Commit changes"**.

3. **Enable GitHub Pages:**
   - In your GitHub repository, click on the **"Settings"** tab.
   - Scroll down to the left sidebar and click on **"Pages"**.
   - Under the **"Source"** dropdown (or "Branch"), select **`main`** (or `master`), and leave the folder as `/ (root)`.
   - Click **Save**.
   - Give it a minute or two, refresh the page, and GitHub will provide you with the live URL of your website!

---

## ✏️ How to Edit Content

I have clearly marked all sections that require your specific business information using the format: `<!-- [Replace ...] -->` inside the HTML files. 

### 1. Replacing Text
- Open any `.html` file (e.g., `index.html`) in a plain text editor (like Notepad, VS Code, or Sublime Text).
- Use `CTRL+F` (or `CMD+F` on Mac) and search for words like `"Fareen"`, `"Phone"`, `"Address"`, or `"[Replace"`.
- Simply delete my placeholder text and type your own. Save the file.

### 2. Replacing the Logo
You have two options for the logo in the header and footer:
- **Text Logo:** It is currently set as `Fareen<span>Gems</span>` which uses a premium font. You can change "Fareen" and "Gems" directly in the HTML.
- **Image Logo:** If you have an image logo (e.g., `logo.png`), look for the commented out code `<!-- <img src="images/logo.png" alt="Fareen Gems Logo"> -->` in the `<nav>` section of each page. Remove the `<!-- ` and ` -->` to activate it, and delete the text logo. Ensure you put your `logo.png` inside the `images/` directory.

### 3. Replacing Images
- **Hero Image (Homepage Background):** In `index.html`, look for `<div class="hero-bg" style="background-image: url('images/hero-sapphire.jpg');"></div>` and change the filename to your image.
- **Gemstone Images:** In `index.html` and `gemstones.html`, look for `<img>` tags. Note: Placeholder images aren't included in the folder. Add your own images to an `images/` folder and name them exactly as referenced in the HTML (e.g., `blue-sapphire-1.jpg`), OR update the src link in the HTML to match your new filenames.

### 4. Updating Social Media Links
Search across all `.html` files for `<!-- [Replace Social Media Links] -->`. 
You will see `<a>` tags linking to `#`. Replace `#` with your actual URL.
```html
<!-- Example before -->
<a href="#" target="_blank"><i class="fab fa-instagram"></i></a>

<!-- Example after -->
<a href="https://instagram.com/fareengems" target="_blank"><i class="fab fa-instagram"></i></a>
```

### 5. Connecting the Contact Form
Since GitHub Pages does not have a backend server to process forms, you must use a free 3rd party service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

**Using Formspree (Easiest Method):**
1. Sign up at [formspree.io](https://formspree.io/) for a free account.
2. Create a "New Form" and type in the email address where you want to receive messages.
3. Formspree will give you a special Endpoint URL (like `https://formspree.io/f/xabcdedy`).
4. Open `contact.html`.
5. Find the form tag: `<form action="[REPLACE_WITH_FORMSPREE_OR_EMAILJS_URL]" method="POST">`
6. Replace `[REPLACE_WITH_FORMSPREE_OR_EMAILJS_URL]` with your Formspree URL.
7. Save the file. When users click submit, you will receive an email!

### 6. Integrating CAPTCHA (Turnstile or reCAPTCHA)
To stop spam emails from your contact form:
1. Register your site on [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) (Free, modern alternative) or Google reCAPTCHA.
2. Open `contact.html`.
3. In the `<head>` section, uncomment the script tag:
   `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`
4. Scroll down to the `<!-- CAPTCHA PLACEHOLDER -->` inside the form.
5. Replace it with the div provided by Cloudflare:
   `<div class="cf-turnstile" data-sitekey="YOUR_PUBLIC_SITE_KEY"></div>`

---
If you need any modifications made to colors or styles, open `css/styles.css` and look at the `:root` variables at the very top of the file!
