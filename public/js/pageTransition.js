function delay(n){
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => done(), n);
    });
}

function pageTransition(){

  const tl =  gsap.timeline();

  tl.to('ul.rows-c li', {duration:.7, scaleX: 1, transformOrigin: "left", stagger: .2});
  tl.to('.page-transition img', {opacity: 1, rotate: 0, x: "-50%", y: "-50%"}, "-=.5")
  tl.to('ul.rows-c li', {duration:.7, scaleX: 0, transformOrigin: "left", stagger: .1, delay: 1});
  tl.to('.page-transition img', {opacity: 0, rotate: "-45deg", x: "-100%", y: "-60%"}, "-=1.4")

  $('html').removeClass('res-navigation-open');
  $('.active').removeClass('active');

  if($(`a.c-link[href="${window.location.pathname}"]`).length > 0){
    $(`a.c-link[href="${window.location.pathname}"]`).addClass('active');
    if($(`a.c-link[href="${window.location.pathname}"]`).parents('.dropdown').length > 0){
      $('.dropdown > .nav-link').addClass('active');
      if($(`a.c-link[href="${window.location.pathname}"]`).parents('.sub-dropdown').length > 0){
        $('.sub-dropdown > .nav-link').addClass('active');
      }
    }
  }

}

function contentAnimation(){

  const tl = gsap.timeline();

  tl.from('.view-content', {duration: 1, opacity: 0, y: 100});
}

barba.init({
  sync: true,
  transitions: [{
    async leave(data){

      const done = this.async();

      pageTransition();
      await delay(1500);
      done();
    },
    async enter(data){
      //contentAnimation();
    }
  }]
})
