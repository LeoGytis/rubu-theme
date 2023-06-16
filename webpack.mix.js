let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
  .js('src/app.js', 'assets')
  .sass('src/app.scss', 'assets')
  .options({
    processCssUrl: false,
    postCss: [tailwindcss('tailwid.config.js')],
  });
