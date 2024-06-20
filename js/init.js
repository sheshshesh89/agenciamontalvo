
(function($) {
    $(function() {      
    $('.s6.boxes').hover( function(){
        $(this).children('a').fadeIn().addClass('slide-top-fast')
      }, function(){
        $(this).children('a').fadeOut().removeClass('slide-top-fast')
      }
    )
    $('.embed-video-container .embed-video').first().fadeIn()
    $('.btn-video-link').on('click', function(e){
      e.preventDefault();
      $(this).css({ 'font-weight': 900 })
      $('.btn-video-link[data-video-link!="'+ $(this).data().videoLink+'"]').css({ 'font-weight': 400 })
      $('.embed-video[data-embed="'+$(this).data().videoLink+'"]').fadeIn()
      $('.embed-video[data-embed!="'+$(this).data().videoLink+'"]').fadeOut()
    })
    
    setTimeout( function(){
      $('.video-list-container').addClass('reveal')
    },1000)
  
    })// end of document ready
  })(jQuery); // end of jQuery name space
  