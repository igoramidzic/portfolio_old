// Disable gulp notifications
process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

// Compile sass into css
elixir(function(mix) {
  mix.sass([
    'main.sass',
    'navbar.sass',
    'spinner.sass',
    'main-hero.sass',
    'main-aboutme.sass',
    'main-abilities.sass',
    'main-projects.sass',
    'main-contact.sass',
    'main-footer.sass'
  ], 'public/css/all.css'); // Output path
});

// Compile javascript
elixir(function(mix) {
  mix.scripts([
    'main.js'
  ]);
});
