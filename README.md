# Developer Portfolio Website

A modern, clean portfolio website for a full-stack .NET, Angular, and React developer.

## Features

- **Hero Section**: Compelling introduction with call-to-action buttons
- **About Me**: Professional background and skills overview
- **Tech Stack**: Organized display of frontend, backend, tools, and other technologies
- **Featured Projects**: Detailed case studies including ClaySys Apps and other projects
- **Experience**: Professional experience and key responsibilities
- **Contact**: Contact information and social links

## Tech Stack

- Angular 17
- TypeScript
- SCSS
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Update Contact Information

Edit `src/app/components/contact/contact.component.html` to update:
- Email address
- LinkedIn profile URL
- GitHub profile URL

### Modify Projects

Edit `src/app/components/projects/projects.component.ts` to add, remove, or modify projects.

### Adjust Styling

Global styles are in `src/styles.scss`. Component-specific styles are in each component's `.scss` file.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── hero/
│   │   ├── navigation/
│   │   ├── projects/
│   │   └── tech-stack/
│   ├── app.component.*
│   ├── app.module.ts
│   └── app-routing.module.ts
├── index.html
├── main.ts
└── styles.scss
```

## Deployment

This portfolio can be deployed to:
- **Netlify**: Connect your GitHub repository and deploy automatically
- **GitHub Pages**: Use `ng build --base-href=/repository-name/` and deploy the `dist` folder
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Azure Static Web Apps**: Deploy directly from GitHub

## License

This project is open source and available for personal use.

