// redirect.js

// Redirect script for Adobe setup using Vercel

const targetUrl = 'https://your-adobe-url.com'; // Change to your Adobe URL

if (typeof window !== 'undefined') {
  window.location.replace(targetUrl);
} else {
  console.log('This script should be run in a browser environment.');
}