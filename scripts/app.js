var main = function(){

  $('.hidden').hide();
  
  $('.clickable').click(function(){
    $(this).next().slideToggle({duration: 300});
  });

  $('.appear').click(function(){
    $(this).next().animate({
        width: [ "toggle", "swing" ], // ширина элемента
        height: [ "toggle", "swing" ], // высота элемента
        opacity: "toggle" // прозрачность элемента
    }, 1500, "linear"); // продолжительность и скорость анимации
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