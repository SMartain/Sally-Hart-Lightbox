$('.photos a').on('click', function () {
  var currentImage = $(this).html()

  // Here we grab the modal and set it to our current image
  // that we've clicked on
  $('.modal-content').html(currentImage)

  $('.modal').fadeIn(500)

  // blocks the default action of following the href attribute
  return false
})

$('.modal-close, .modal-background').on('click', function () {
  $('.modal').fadeOut(500)
  return false
})
