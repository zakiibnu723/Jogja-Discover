window.addEventListener('resize', function () { 
  "use strict";
  window.location.reload(); 
});
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

const lenis = new Lenis({
  duration: 2,
        // lerp: 5,
        easing: (t) => (t === 1 ? 10 : 1 - Math.pow(1 - t, 5)),
        direction: "vertical",
        gestureDirection: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.6,
        smoothTouch: true,
        touchMultiplier: 1
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const navbar = document.querySelector('.navbar')
const heroContainer = document.querySelector('.hero-container')
const heroBackground = heroContainer.querySelector('.hero-background')
const heroVideo = heroBackground.querySelector('.hero-video')
let prevScrollPost = window.scrollY

//default hero video
heroVideo.pause()

window.addEventListener('scroll', scrollAnimation)
function scrollAnimation() {
  let currentScrollPost = window.scrollY
  navbarAnimation(currentScrollPost)
  
  const effect = document.querySelector('.effect')
  if (currentScrollPost > 0) {
    heroVideo.play()
  }
}
function navbarAnimation(currentScrollPost) {
  (currentScrollPost > prevScrollPost) && !menuActive
  ? navbar.classList.add('slide') 
  : navbar.classList.remove('slide')
  prevScrollPost = currentScrollPost
}


//navbar menu mobile device
let menuActive = false
const menuButton = document.querySelector('.menu-button')
const attractionLinks = document.querySelector('.attraction-links')
menuButton.addEventListener('click', () => {
  attractionLinks.classList.toggle('active')
  menuButton.classList.toggle('rotate')
  menuActive = !menuActive
})




gsap.registerPlugin(ScrollTrigger)


// Pin the hero-background
gsap.timeline({
  scrollTrigger: {
    trigger: '.hero-container',
    start: '90% bottom',
    end: '+=100%',
    // pin: '.hero-background', // Pin only the hero-background
    scrub: true,
  }
})
.to('.hero-background', {scale: 0.8, rotation: 0, autoAlpha: 0, lazy: false, ease: 'power2'});



const taglines = gsap.utils.toArray('.tagline');

taglines.forEach(tagline => {
  
  gsap.timeline({
    scrollTrigger: {
      trigger: tagline, 
      start: 'center 30%',
      end: 'center top',
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true
    },
  })
  .fromTo(tagline, {autoAlpha: 1}, {autoAlpha: 0, lazy: false, ease: 'none'})

  gsap.timeline({
    scrollTrigger: {
      trigger: tagline,
      start: 'center bottom',
      end: 'center 70%',
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true
    }
  })
  .fromTo(tagline, {autoAlpha: 0}, {autoAlpha: 1, lazy: false, ease: 'none'})
  
});


//intro section
//intro - enter animation
gsap.timeline({
  scrollTrigger: {
    trigger: '.text-intro1',
    start: 'center 140%',
    end: 'center 90%',
    scrub: true,
    // markers: true
  }
})
.from('.one', {autoAlpha: 0, lazy: false, ease: 'power4.in'}, '<')
.from('.two', {autoAlpha: 0, lazy: false, ease: 'power4.in'}, '<')
.from('.text-intro1', {autoAlpha: 0, lazy: false, ease: 'power4.in'}, '<')
.from('.three', {autoAlpha: 0, lazy: false, ease: 'power4.in'}, '<')
gsap.timeline({
  scrollTrigger: {
    trigger: '.text-intro2',
    start: 'center bottom',
    end: 'center 40%',
  }
})
.from('.four', {autoAlpha: 0, lazy: false, ease: 'power2.in'})
.from('.five', {autoAlpha: 0, lazy: false, ease: 'power2.in'}, '<')
.from('.text-intro2', {autoAlpha: 0, lazy: false, ease: 'power2.in'}, '<')
.from('.six', {autoAlpha: 0, lazy: false, ease: 'power2.in'}, '<')




//intro - parallax effect
gsap.timeline({
  scrollTrigger: {
    trigger: '.intro-container',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    // markers: true
  },
})
.to('.one', {y: '-23.15vh', lazy: false, ease: 'none'})
.to('.two', {y: '-27.78vh', lazy: false, ease: 'none'}, '<')
.to('.three', {y: '-55.56vh', lazy: false, ease: 'none'}, '<')
.to('.four', {y: '-40.33vh', lazy: false, ease: 'none'}, '<')
.to('.five', {y: '-80.30vh', lazy: false, ease: 'none'}, '<')
.to('.six', {y: '-110.81vh', lazy: false, ease: 'none'}, '<')




//Attraction Section
//Attraction - Enter Animation
gsap.timeline({
  scrollTrigger: {
    trigger: '.attraction-header',
    start: 'top 80%',
    end: 'top 40%',
    scrub: true,
    // markers: true
  }
}).from('.attraction-header', {x: '-20vw', autoAlpha: 0, lazy: false, ease: 'power2'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.temples',
    start: 'top 90%',
    end: 'top 50%',
    scrub: true,
    // markers: true
  }
}).from('.temples', {x: '-20vw', autoAlpha: 0, lazy: false, ease: 'power2'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.palace',
    start: 'top 100%',
    end: 'top 60%',
    scrub: true,
    // markers: true
  }
}).from('.palace', {x: '-20vw', autoAlpha: 0, lazy: false, ease: 'power2'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.city-center',
    start: 'top 110%',
    end: 'top 70%',
    scrub: true,
    // markers: true
  }
}).from('.city-center', {x: '-20vw', autoAlpha: 0, lazy: false, ease: 'power2'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.natural-beauty',
    start: 'top 120%',
    end: 'top 80%',
    scrub: true,
    // markers: true
  }
}).from('.natural-beauty', {x: '-20vw', autoAlpha: 0, lazy: false, ease: 'power2'})


//Attraction - Hover Animation
const attractions = document.querySelectorAll('.attraction a')
const templesBackground = document.querySelector('.temples-background')
const palaceBackground = document.querySelector('.palace-background')
const cityCenterBackground = document.querySelector('.city-center-background')
const naturalBeautyBackground = document.querySelector('.natural-beauty-background')
const attributionPalace = document.querySelector('.attribution-palace')
const attributionCityCenter = document.querySelector('.attribution-city-center')
const attributionNaturalBeauty = document.querySelector('.attribution-natural-beauty')

attractions.forEach((attraction) => {
  attraction.addEventListener('mouseover', () => {
    if (attraction.classList.contains('temples')) {
      templesBackground.style.opacity = '1';
    } else if (attraction.classList.contains('palace')) {
      palaceBackground.style.opacity = '1';
      attributionPalace.style.opacity = '1';
    } else if (attraction.classList.contains('city-center')) {
      cityCenterBackground.style.opacity = '1';
      attributionCityCenter.style.opacity= '1';
    } else if (attraction.classList.contains('natural-beauty')) {
      naturalBeautyBackground.style.opacity = '1';
      attributionNaturalBeauty.style.opacity = '1';
    }

    console.log(attraction.className);

    attraction.style.opacity = '1';
    // attraction.querySelector('.hoverline').style.transform = 'translateX(0)';
  });

  attraction.addEventListener('mouseout', () => {
    if (attraction.classList.contains('temples')) {
      templesBackground.style.opacity = '0';
    } else if (attraction.classList.contains('palace')) {
      palaceBackground.style.opacity = '0';
      attributionPalace.style.opacity = '0';
    } else if (attraction.classList.contains('city-center')) {
      cityCenterBackground.style.opacity = '0';
      attributionCityCenter.style.opacity= '0';
    } else if (attraction.classList.contains('natural-beauty')) {
      naturalBeautyBackground.style.opacity = '0';
      attributionNaturalBeauty.style.opacity = '0';
    }

    attraction.style.opacity = '0.19';
    // attraction.querySelector('.hoverline').style.transform = 'translateX(-32vw)';
  });
});




//Footer Section
//Footer - Enter Animation
const footerLogo = document.querySelector('footer .logo')
gsap.timeline({
  scrollTrigger: {
    trigger: footerLogo,
    start: 'top bottom',
    end: 'top 60%',
    scrub: true,
    // markers: true
  }
}).from(footerLogo, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})

const learnMoreElements = document.querySelectorAll('.learn-more *')
learnMoreElements.forEach((element) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'top 60%',
      scrub: true,
      // markers: true
    }
  }).from(element, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})
})

const travelGuideElements = document.querySelectorAll('.travel-guide *')
travelGuideElements.forEach((element) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 110%',
      end: 'top 70%',
      scrub: true,
      // markers: true
    }
  }).from(element, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})
})



const allLinks = document.querySelectorAll('ul li a')
allLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    const hoverline = link.querySelector('.hoverline')
    hoverline.classList.add('animated')
  })

  link.addEventListener('mouseout', () => {
    const hoverline = link.querySelector('.hoverline')
    hoverline.classList.remove('animated')
  })
})

