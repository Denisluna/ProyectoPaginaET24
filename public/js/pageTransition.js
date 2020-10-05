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
      contentAnimation();
    }
  }]
})
