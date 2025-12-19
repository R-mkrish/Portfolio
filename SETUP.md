# Quick Setup Guide

## Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd developer-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   Navigate to `http://localhost:4200`

## Before You Deploy

### Update Contact Information

1. Open `src/app/components/contact/contact.component.html`
2. Replace placeholder values:
   - `your.email@example.com` → Your actual email
   - `linkedin.com/in/yourprofile` → Your LinkedIn URL
   - `github.com/yourusername` → Your GitHub URL

### Customize Content

All content is in the component files:
- **Hero**: `src/app/components/hero/hero.component.html`
- **About**: `src/app/components/about/about.component.html`
- **Projects**: `src/app/components/projects/projects.component.ts`
- **Experience**: `src/app/components/experience/experience.component.ts`
- **Tech Stack**: `src/app/components/tech-stack/tech-stack.component.ts`

### Styling

- Global styles: `src/styles.scss`
- Component styles: Each component has its own `.scss` file
- Color scheme: Defined in CSS variables in `styles.scss`

## Features Included

✅ Responsive design (mobile-friendly)
✅ Smooth scrolling navigation
✅ Modern, clean UI
✅ All required sections (Hero, About, Tech Stack, Projects, Experience, Contact)
✅ ClaySys Apps featured prominently
✅ 4 additional realistic projects
✅ Professional content ready to use

## Build for Production

```bash
npm run build
```

Output will be in the `dist/developer-portfolio` folder.

