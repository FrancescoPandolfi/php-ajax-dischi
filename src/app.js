const $ = require ("jquery");
const Handlebars = require ("handlebars");

$(document).ready(function() {

  // Chiamata che prende gli albums
  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    // data: {'author' : 'autore'},
    success: function (data) {
      printAlbums(data);
    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });

  // Chiamata che popola la select
  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    success: function (data) {
      data.forEach(function(item) {
        $('select').append('<option value=' + item.author +'>' + item.author + '</option>')
      });
    },
    error: function (richiesta, stato, errore) {
      $('main').append("<li>È avvenuto un errore. " + errore + "</li>");
    }
  });






});


function printAlbums(albums) {

  // handlebar setup
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  albums.forEach((album) => {
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








  // $(document).on('mouseenter', '.album', () => {
  //       console.log('ciao');
  // });

  // $(document).on('mouseleave', '.album', () => {
  //   console.log('ciao');
  // });
