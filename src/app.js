const $ = require ("jquery");
const Handlebars = require ("handlebars");

$(document).ready(function() {

  // handlebar setup
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);


  $.ajax({
    url: "http://localhost:8888/php-ajax-dischi/includes/server.php",
    method: "GET",
    // data: {'year' : '2018'},
    success: function (data, stato) {

      data.forEach((album) => {

        var context = {
          title: album.title,
          author: album.author,
          poster: album.poster,
          year: album.year,

        };
        var html = template(context);

        $('.main_wrapper').append(html);

      });


    },
    error: function (richiesta, stato, errore) {
      alert("E' avvenuto un errore. " + errore);
    }
  });





  // $(document).on('mouseenter', '.album', () => {
  //       console.log('ciao');
  // });

  // $(document).on('mouseleave', '.album', () => {
  //   console.log('ciao');
  // });


});
