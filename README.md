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

## Docker

Build and run the application in a container:

```bash
docker build -t rouleurco-site .
docker run -p 3000:3000 rouleurco-site
```

## Contact Form Configuration

The contact form submits to a custom API route which forwards the data to your CRM.
Create a `.env` file based on `.env.example` and set `CRM_ENDPOINT` to your CRM's
URL:

```bash
cp .env.example .env
echo "CRM_ENDPOINT=https://your-crm.example.com/api/contact" >> .env
```

`CRM_ENDPOINT` is used by `pages/api/contact.js` to forward form submissions.

## Tailwind CSS

Tailwind CSS is configured via `tailwind.config.js` and processed by
PostCSS. Styles are loaded from `styles/globals.css`.

