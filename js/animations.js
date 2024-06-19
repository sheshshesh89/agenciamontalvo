
    $.fn.isInViewport = function() {
        if ( $(this).offset() ){
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
        }
    };
    $(window).on('resize scroll', function() {
        if ($('.boxes').isInViewport()) {
                var delay = 0
            $('.boxes img').each(function(){
                var element = this
                setTimeout( function(){
                    $(element).addClass('fade-in')
                },delay)
                delay += 100;
            })

        } else {
        //    / $('.boxes img').removeClass('fade-in')
            // do something else
        }
        if( $('#contact .row .col ul.social li').isInViewport() ){
            var delay = 0 ;
            $('#contact .row .col ul.social li').each(function(){
                var element = this
                setTimeout( function(){
                    $(element).addClass('slide-top')
                },delay)
                delay += 100;
            })
        }
        if( $('#contact .row .col ul.address li').isInViewport() ){
            var delay = 0 ;
            $('#contact .row .col ul.address li').each(function(){
                var element = this
                setTimeout( function(){
                    $(element).addClass('slide-top')
                },delay)
                delay += 100;
            })
        }

        if( $('#awards .row .col ul li ').isInViewport() ){
            var delay = 0
            $('#awards .row .col ul li ').each(function(){
                var element = this
                setTimeout( function(){
                    $(element).addClass('slide-top')
                },delay)
                delay += 200;
            })
        }
        

        // if( $('h1, h2, #intro .row .col img').isInViewport() ) {
        //     $('h1, h2,  #intro .row .col img  ').addClass('slide-top')
        //         var delay = 0 ;

        //     $('#intro .row .col p ').each(function(){
        //         var element = this
        //         setTimeout( function(){
        //             $(element).addClass('slide-top')
        //         },delay)
        //         delay += 500;
        //     })

        // } else{
        //     $('h1, h2,  #intro .row .col img , #intro .row .col p').removeClass('slide-top') 
        // }
    });
    setInterval( function(){
        if( document.querySelector('.anchor-arrow') ){

            if( document.querySelector('.anchor-arrow').classList.contains('bounce-top') ){
                document.querySelector('.anchor-arrow').classList.remove('bounce-top')
            } else {
                document.querySelector('.anchor-arrow').classList.add('bounce-top')
            }
        }
    }, 2000 )