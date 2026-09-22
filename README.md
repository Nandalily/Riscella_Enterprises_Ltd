# Riscella multi-page React migration

This package contains the multi-page structure for the existing Riscella Vite/React site.

## 1. Install
From your existing project root:

npm install react-router-dom

## 2. Copy these files
Copy the contents of this package's `src/App.jsx`, `src/components/`, and `src/pages/`
into the matching locations in your existing project.

Do NOT replace your existing:
- src/data.js
- src/icons.jsx
- src/assets/
- existing CSS files

The new pages intentionally continue using the existing data exports and CSS class names.

## 3. Routes
/
 /about
 /products
 /solutions
 /compliance
 /how-to-order
 /contact

## 4. Important
The old IntersectionObserver in App.jsx is no longer needed because each section is now a real route.

The existing data-driven arrays such as CATEGORIES, BRANDS, CLIENTS, REGULATORY,
ADVANTAGES, STEPS, VALUES and TARGET_SECTORS remain the source of the corresponding
content.

## 5. Development
npm run dev

If deploying as a Cloudflare Worker/SPA, make sure the deployment serves index.html
for unknown application routes so direct visits such as /products do not return 404.
