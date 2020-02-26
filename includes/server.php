<?php

include __DIR__ . '/database.php';

$author = $_GET['author'];


// filtra per autore
$filtered = [];
foreach ($database as $album) {
  if ($album['author'] == $author) {
    $filtered[] = $album;
  }
}

header('Content-Type: application/json');

if (isset($_GET['author']) && $author != 'All') {
  echo json_encode($filtered);
} else {
  echo json_encode($database);
}
