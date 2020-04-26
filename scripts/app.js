var main = function(){

  $('.hidden').hide();
 
  $('.clickable').click(function(){
    $(this).next().slideToggle({duration: 300});
  });

  $('.header-link').click(function(){
    var id = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: ($(id).offset().top - 76)
    }, 500);
    return false;
  });

};
$(document).ready(main);