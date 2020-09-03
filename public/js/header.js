$(function(){
  const transitionDelay = window.innerWidth < 860 ? 300 : 100;
  $(document).mouseup(function(e){
    let dropMenu = $(".dropdown-container");

    if(!dropMenu.is(e.target) && dropMenu.has(e.target).length === 0 && !$('.dropdown').is(e.target)){
        dropMenu.slideUp(transitionDelay);
    }
  });
  // $('.dropdown').click(function(event){
  //   const containerHeight = $(this).children('.dropdown-container').children().length * parseInt($('.nav-links a:nth-child(1)').css('height'));
  //   if ($(this).children('.dropdown-container').height() > 0) {
  //     $(this).children('.dropdown-container').css('height', 0);
  //   }else{
  //     $('.dropdown-container').css('height', 0);
  //     $(this).children('.dropdown-container').css('height', containerHeight);
  //     const scrollY = window.scrollY;
  //     setTimeout(function(){
  //       window.scrollTo(0, parseInt(scrollY));
  //     }, 1);
  //   }
  // });
  $('.dropdown').click(function(event){
    if($(this).children('.dropdown-container').css('display') == 'block'){
      $('.dropdown-container').slideUp(transitionDelay);
    }else {
      $('.dropdown-container').slideUp(transitionDelay);
      $(this).children('.dropdown-container').slideDown(transitionDelay);
    }
    event.stopPropagation();
  });
  $('.show-menu-btn').click(function(){
    const scrollY = "-" + window.scrollY + "px";
    $('body').css({'position': 'fixed', 'top': scrollY});
    $('.nav-links').css('right', '0');
  });
  $('.close-menu-btn').click(function(){
    const scrollY = $('body').css('top');
    $('body').css({'position': '', 'top': ''});
    window.scrollTo(0, parseInt(scrollY) * -1);
    $('.nav-links').css('right', '-100%');
  });
});
