import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';
import postsData from './src/data/posts.json';

// Extract all dynamic article slugs automatically
const dynamicRoutes = postsData.map((post) => `/article/${post.slug}`);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://the-aura-website.vercel.app', // Replace with your actual live Vercel domain if changed
      dynamicRoutes: dynamicRoutes,
    }),
  ],
});