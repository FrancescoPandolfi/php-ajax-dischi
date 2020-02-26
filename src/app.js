const $ = require ("jquery");
const Handlebars = require ("handlebars");

$(document).ready(function() {

  getAlbums();
  getAuthor();

  // Prende l'autore dalla select
  $(document).on("change", "select", function() {
    var selectedAuthor = $(this).children("option:selected").val();
      getAlbumByAuthor(selectedAuthor);

  });

});




// Funzione che prende tutti gli album
function getAlbums() {
  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    success: function (data) {
      printAlbums(data);
    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });
}

// Funzione che popola select
function getAuthor() {
  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    success: function (data) {
      data.forEach(function(item) {
        $('select').append('<option>' + item.author + '</option>')
      });
    },
    error: function (richiesta, stato, errore) {
      $('main').append("<li>È avvenuto un errore. " + errore + "</li>");
    }
  });
}

// Funzione che stampa gli album
function printAlbums(albums) {

  // handlebar setup
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  albums.forEach(function(album) {
    var context = {
      title: album.title,
      author: album.author,
      poster: album.poster,
      year: album.year,
    };
    var html = template(context);

    $('.main_wrapper').append(html);

  });
}

// funzione che chiama l'album in base all'autore passato
function getAlbumByAuthor(selectedAuthor) {
  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    data: {'author' : selectedAuthor},
    success: function (data) {
      $('.main_wrapper').html('');
      printAlbums(data)
    },
    error: function (richiesta, stato, errore) {
      $('main').append("<li>È avvenuto un errore. " + errore + "</li>");
    }
  });
}
