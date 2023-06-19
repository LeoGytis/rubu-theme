/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
    './sections/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
