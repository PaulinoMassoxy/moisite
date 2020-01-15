$(document).ready(function(){

    $('.cookie')
    .animate({ bottom: 0,}, 1500)
    .slideDown();
    
    $('button, .fas.fa-times').click(function(){
       
        $('.cookie').animate({
            height: 'toggle'
        }, 600);
        /* чтобы блок уезжал вниз за пределы экрана, могу делать еще так

         $('.cookie').slideUp(500);
         $('.cookie').slideToggle(500)
        
        */
    });
});