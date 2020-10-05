$(function(){

  const tl = gsap.timeline({defaults: {ease: "power1.out"}});

  tl.to(".text", {duration: 1, y: "0%", stagger: 0.2});
  tl.to(".preload", {duration: .6, y: "-100%", delay: 1});
  tl.to(".text-animation", {duration: .6, y: "100%", opacity: 0, display: "none"}, "-=.5");

  $(document).mouseup(function(e){
    let dropMenu = $(".dropdown-content");

    if(!dropMenu.is(e.target) && dropMenu.has(e.target).length === 0 && !$('.dropdown span, .dropdown span i').is(e.target)){
        dropMenu.removeClass('show');
    }
  });

  $('body').on('click', '.dropdown', function(e){
    if($(this).children('.dropdown-content.show').length > 0){
      $('.dropdown-content').removeClass('show');
    }else {
      $('.dropdown-content').removeClass('show');
      $(this).children('.dropdown-content').addClass('show');
    }
  });
  $('body').on('click', '.show-menu-btn', function(e){
    if($('.res-navigation.show').length > 0){
      $('.res-navigation').removeClass('show');
    }else {
      $('.res-navigation').addClass('show');
    }
  });
});
