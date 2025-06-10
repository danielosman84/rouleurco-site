# Rouleur Co. Site

A Next.js website for Rouleur Co.

## Requirements

- **Node.js** v18 or higher
- **npm** (included with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Formspree Configuration

The contact form uses Formspree. Update the `action` attribute in
`components/HomePage.js` with your Formspree form endpoint:

```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
  ...
</form>
```

Replace `https://formspree.io/f/your-form-id` with the URL provided by Formspree.

## Tailwind CSS

Tailwind CSS is configured via `tailwind.config.js` and processed by
PostCSS. Styles are loaded from `styles/globals.css`.


## Blog

Blog posts are stored in `data/blog.json`. View them at `/blog` and edit using the admin interface at `/admin/blog` (login required).
