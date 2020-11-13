$(function(){

  const tl = gsap.timeline({defaults: {ease: "power1.out"}});

  tl.to(".text", {duration: 1, y: "0%", stagger: 0.2});
  tl.to(".preload", {duration: .6, y: "-100%", delay: 1});
  tl.to(".text-animation", {duration: .6, y: "100%", opacity: 0, display: "none"}, "-=.5");

  if($(`a.c-link[href="${window.location.pathname}"]`).length > 0){
    $(`a.c-link[href="${window.location.pathname}"]`).addClass('active');
    if($(`a.c-link[href="${window.location.pathname}"]`).parents('.dropdown:not(#user)').length > 0){
      $('.dropdown > .nav-link').addClass('active');
      if($(`a.c-link[href="${window.location.pathname}"]`).parents('.sub-dropdown').length > 0){
        $('.sub-dropdown > .nav-link').addClass('active');
      }
    }
  }

  $('body').on('click', '.show-menu-btn', function(e){
    if($('html').hasClass('res-navigation-open')){
      $('html').removeClass('res-navigation-open');
    }else{
      $('html').addClass('res-navigation-open');
    }
  });

  $('body').on('click', '.open-g-nav', function(){
    $('html').addClass('g-nav-is-open');
  });
  $('body').on('click', '#op-nav .close-btn', function(){
    $('html').removeClass('g-nav-is-open');
  });


  $('body').on('click', '.contact-btn', function(){
    $('html').addClass('contact-show');
  });
  $('body').on('click', '.contact .close-btn', function(){
    $('html').removeClass('contact-show');
  });

  $('body').on('click', '.p-item-title', function(e){
    if($(this).hasClass('show')){
      $('.p-item-title').removeClass('show');
    }else{
      $('.p-item-title').removeClass('show');
      $(this).toggleClass('show');
    }

    e.stopPropagation();
  });

});
