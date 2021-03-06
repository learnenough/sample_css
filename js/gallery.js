// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let images = document.querySelector("#gallery").querySelectorAll("img");
  let currentDisplayImage = document.querySelector("#gallery-photo").
                                     querySelector("img");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      setAsDisplayImage(image, currentDisplayImage);
      setAsCurrent(image);
      setInfo(image);
    });
  });
}

// Sets the clicked image as the current display image.
function setAsDisplayImage(image, currentDisplayImage) {
  let newImageSrc = image.dataset.largeVersion;
  currentDisplayImage.setAttribute("src", newImageSrc);
}

// Sets the given image as "current".
function setAsCurrent(image) {
  document.querySelector(".current").classList.remove("current");
  image.parentNode.classList.add("current");
}

// Sets the image information in the sidebar.
function setInfo(image) {
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector("#title");
  let description = galleryInfo.querySelector("#description");

  title.innerHTML       = image.dataset.title;
  description.innerHTML = image.dataset.description;
}



// $(document).ready(function() {

//   $('#gallery-thumbs a').click(function(event) {
//     //don't follow link
//     event.preventDefault();
//     //get path to new image
//     var imgPath = $(this).attr('href');
//     //get reference to old image
//     var oldImage = $('#gallery-photo img');

//     //create HTML for new image
//     var newImage = $('<img src="' + imgPath +'">');
//     //make new image invisible
//     newImage.hide();
//     //add to the #photo div
//     $('#gallery-photo').prepend(newImage);
//     //fade in new image
//     var fade_time = 1000;

//     $('#gallery-info h3').html($(this).find('.photo-title').html() || 'No Title');
//     $('#gallery-info p').html($(this).find('.photo-desc').html() || 'No Description');

//     if(!$(this).hasClass('current')) {
//       $('.current').removeClass('current')
//       $(this).addClass('current');
//     }

//      //fade out old image and remove from DOM
//      oldImage.fadeOut(fade_time, function(){
//        $(this).remove();
//       });

//      newImage.fadeIn(fade_time);
//   }); // end click

//   $('#gallery-thumbs a:first').click();
// }); // end ready


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