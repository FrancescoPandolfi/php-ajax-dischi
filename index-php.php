<?php
  include __DIR__ . '/includes/database.php';
?>


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
    </nav>
  </header>

  <!-- main -->
  <main>
    <div class="main_wrapper">

      <?php if (!empty($database)): ?>

        <?php foreach ($database as $album): ?>
          <div class="album">
            <div class="cover">
              <img src="<?=$album['poster'] ?>" alt="">
            </div>
            <h2 class="title"><?=$album['title'] ?></h2>
            <h3 class="author"><?=$album['author'] ?></h3>
            <span class="year"><?=$album['year'] ?></span>
          </div>
        <?php endforeach; ?>

    <?php else: ?>
      <?= 'Non ci sono album'; ?>
    <?php endif; ?>


  </div> <!-- end main wrapper -->




  </main>
  <script src="dist/app.js" charset="utf-8"></script>
</body>
</html>
