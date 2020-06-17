$("#gallery_featured > div:gt(0)").hide();

setInterval(function() {
  $('#gallery_featured > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#gallery_featured');
}, 5000);