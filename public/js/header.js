$(function(){

  const tl = gsap.timeline({defaults: {ease: "power1.out"}});

  tl.to(".text", {duration: 1, y: "0%", stagger: 0.2});
  tl.to(".preload", {duration: .6, y: "-100%", delay: 1});
  tl.to(".text-animation", {duration: .6, y: "100%", opacity: 0, display: "none"}, "-=.5");

  if($(`a.c-link[href="${window.location.pathname}"]`).length > 0){
    $(`a.c-link[href="${window.location.pathname}"]`).addClass('active');
    if($(`a.c-link[href="${window.location.pathname}"]`).parents('.dropdown').length > 0){
      $('.dropdown > .nav-link').addClass('active');
    }
  }

  // $(document).mouseup(function(e){
  //   let dropMenu = $(".dropdown-content");
  //
  //   if(!dropMenu.is(e.target) && dropMenu.has(e.target).length === 0 && !$('.dropdown span, .dropdown span i').is(e.target)){
  //       dropMenu.removeClass('show');
  //   }
  // });
  // $('body').on('click', '.dropdown', function(e){
  //   if($(this).children('.dropdown-content.show').length > 0){
  //     $('.dropdown-content').removeClass('show');
  //   }else {
  //     $('.dropdown-content').removeClass('show');
  //     $(this).children('.dropdown-content').addClass('show');
  //   }
  // });

  $('body').on('click', '.show-menu-btn', function(e){
    if($('.res-navigation.show').length > 0){
      $('.res-navigation').removeClass('show');
    }else {
      $('.res-navigation').addClass('show');
    }
  });

  $('body').on('click', 'a.c-link', function(e){
    $('.active').removeClass('active');
    $(this).addClass('active');
    if($(this).parents('.dropdown').length > 0){
      $('.dropdown > .nav-link').addClass('active');
    }
  });

  $('body').on('click', '.contact-btn', function(){
    $('html').addClass('contact-show');
  });
  $('body').on('click', '.close-btn', function(){
    $('html').removeClass('contact-show');
  });

});
