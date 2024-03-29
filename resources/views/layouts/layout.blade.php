<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta name="description" content="Igor Amidzic's Wed Development Portfolio">
    <meta name="keywords" content="HTML,CSS,Javascript,Bootstrap,NodeJS,PHP,Laravel,Portfolio">
    <meta name="author" content="Igor Amidzic">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="bower_components/aos/dist/aos.css">
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/all.css">
    <!-- Title -->
    <title>Igor Amidzic - Web Developer</title>
  </head>
  <body>

    <div id="overlay" style="position: fixed; background: #fff; height: 100%; width: 100%; left: 0; top: 0; transition: all .5s; opacity: 1; z-index:99999">
      <div class="spinner"></div>
    </div>

    <!-- Main page -->
    <div class="main-page">
      <!-- Yield main content -->
      @yield ('main-content')
    </div>

  </body>
  <!-- Scripts -->
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="bower_components/aos/dist/aos.js" charset="utf-8"></script>
  <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
  <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="js/all.js"></script>
</html>
