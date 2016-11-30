$(document).ready(function() {

  $('#gallery-thumbs a').click(function(event) {
    //don't follow link
    event.preventDefault();
    //get path to new image
    var imgPath = $(this).attr('href');
    //get reference to old image
    var oldImage = $('#gallery-photo img');

    //create HTML for new image
    var newImage = $('<img src="' + imgPath +'">');
    //make new image invisible
    newImage.hide();
    //add to the #photo div
    $('#gallery-photo').prepend(newImage);
    //fade in new image
    var fade_time = 1000;

    $('#gallery-info h3').html($(this).find('.photo-title').html() || 'No Title');
    $('#gallery-info p').html($(this).find('.photo-desc').html() || 'No Description');

    if(!$(this).hasClass('current')) {
      $('.current').removeClass('current')
      $(this).addClass('current');
    }

     //fade out old image and remove from DOM
     oldImage.fadeOut(fade_time, function(){
       $(this).remove();
      });

     newImage.fadeIn(fade_time);
  }); // end click

  $('#gallery-thumbs a:first').click();
}); // end ready


  // $('#gallery img').each(function(i) {
  //   var imgFile = $(this).attr('src');
  //   var preloadImage = new Image();
  //   preloadImage.src = imgFile.replace('.jpg', '_h.jpg');

  //   $(this).hover(
  //     function() {
  //       $(this).attr('src', preloadImage.src);
  //     },
  //     function () {
  //       var currentSource = $(this).attr('src');
  //       $(this).attr('src', imgFile);
  //   }); // end hover
  // }); // end each