$(function(){
  const swup = new Swup();

  swup.on('willReplaceContent', unmountEvents);
  swup.on('contentReplaced', mountEvents);

  buttonEvents();
  setTitleHeight();


  const transitionDelay = window.innerWidth > 860 ? 100 : 300;

  $(document).mouseup(function(e){
    let dropMenu = $(".dropdown-container");

    if(!dropMenu.is(e.target) && dropMenu.has(e.target).length === 0 && !$('.dropdown').is(e.target)){
        dropMenu.slideUp(transitionDelay);
    }
  });

  $('.dropdown').click(function(event){
    if($(this).children('.dropdown-container').css('display') == 'block'){
      $('.dropdown-container').slideUp(transitionDelay);
    }else {
      $('.dropdown-container').slideUp(transitionDelay);
      $(this).children('.dropdown-container').slideDown(transitionDelay);
    }
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

  function mountEvents(){
    buttonEvents();
    setTitleHeight();
  }
  function unmountEvents(){
    removeButtonEvents();
  }

  function buttonEvents(){
    if($('.shw-btn')){
      console.log("Se añaden los eventos");
      let button = $('.shw-btn');
      button.on('click', scrollContent);
    }
  }

  function removeButtonEvents(){
    if($('.shw-btn')){
      console.log("Se remueven los eventos");
      let button = $('.shw-btn');
      button.off('click', scrollContent);
    }
  }

  function scrollContent(){
    const containerTopPosition = $('.container').position().top;
    $('html, body').animate({
        scrollTop: containerTopPosition
      }, 400)
  }

  function setTitleHeight(){
    const imageBannerHeight = window.innerHeight - $('.banner').height() - $('.header').height();
    console.log(imageBannerHeight);
    $('.header-container').css('height', `${imageBannerHeight}px`);
  }
});
