let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'assets').sass('src/tailwind.scss', 'assets');
