$(function() {
    $('.title-accodian').click(function(){
        $('.accodian').removeClass('active')
       $(this).parent().addClass('active')
    })
    $('.close').click(function(){
        $('.accodian').removeClass('active')
    })
    $('.ico-menu').click(function(){
        $('.nav').addClass('active')
        $('.ico-menu').addClass('active')
    })
    $('.close-menu').click(function(){
        $('.nav').removeClass('active')
        $('.ico-menu').removeClass('active')
    })


    $('.gallery-photo').slick({
        infinite: true,
        slidesToShow: 1, 
        arrows:false,
        dot:false,
        centerMode: true,
        centerPadding: '30px', 
    });

    $('.control-prev').click(function(){  
      $('.gallery-photo').slick('slickPrev');
    } );
  
    $('.control-next').click(function(){ 
        $('.gallery-photo').slick('slickNext');
    } );  
    $('.btn-viewmore').click(function(){ 
        $(this).parent().addClass('active') 
    } );  
    $('.nav a').click(function(){ 
        const id = $(this).attr('data-href');   
          $('html, body').animate({
            scrollTop: $(`#${id}`).offset().top
        }, 200);
    })
})
