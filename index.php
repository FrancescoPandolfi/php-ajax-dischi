<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="dist/app.css">
  <title>Document</title>
</head>
<body>

  <!-- header -->
  <header>
    <nav class="navbar">

      <div class="logo">
        <img src="src/partials/img/logo.svg" alt="">
      </div>

      <div class="select">
        <select name="author">
          <option selected disabled>Choose an author</option>
          <option>All</option>
        </select>
      </div>

    </nav>
  </header>

  <!-- main -->
  <main>
    <div class="main_wrapper">
    </div>
  </main>




  <script id="album-template" type="text/x-handlebars-template">
    <div class="album">
      <div class="cover">
        <img src="{{poster}}" alt="">
      </div>
      <h2 class="title">{{title}}</h2>
      <h3 class="author">{{author}}</h3>
      <span class="year">{{year}}</span>
    </div>
  </script>

  <script src="dist/app.js" charset="utf-8"></script>
</body>
</html>
