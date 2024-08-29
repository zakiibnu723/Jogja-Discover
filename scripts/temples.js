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
let prevScrollPost = window.scrollY
window.addEventListener('scroll', scrollAnimation)
function scrollAnimation() {
  let currentScrollPost = window.scrollY
  navbarAnimation(currentScrollPost)
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

gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true
  }
})
.to('.hero img', {y: '20vh', lazy: false, ease: 'none'})
.to('.hero h1', {y: '-20vh', lazy: false, ease: 'none'}, '<')



const textIntro = document.querySelector('.text-intro p')

var words = textIntro.textContent.split(' ')

textIntro.innerHTML = words.map((word) => `<span>${word}</span>`).join(' ')

var textIntroWords = textIntro.querySelectorAll('span')

gsap.timeline({
  scrollTrigger: {
    trigger: '.text-intro p',
    start: 'center center',
    end: '+=300%',
    // scrub: true,
    invalidateOnRefresh: true,
    pin: true,
    // pinSpacing: true,
    // toggleActions: 'play reverse play reverse',
    // markers: true,
  }
})


gsap.timeline({
  scrollTrigger: {
    trigger: '.text-intro p',
    start: 'center center',
    end: '+=300%',
    scrub: true,
    invalidateOnRefresh: true,
    // markers: true,
  }
})
.to(textIntroWords, {autoAlpha: 1, stagger: 0.4, lazy: false, ease: 'none'})




//destinations animation
//image
const images1 = gsap.utils.toArray('.image1 img');
const destinationsBackground1 = gsap.utils.toArray('.destinations-background .image-1 img')

images1.forEach((image, i) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true
    }
  })
  .fromTo(image, 
    {objectPosition: '0 100%'},
    {objectPosition: '0 0%', lazy: false, ease: 'none' }
  )

  image.addEventListener('mouseenter', () => {
    destinationsBackground1[i].style.opacity = '1'
    // console.log("background" + i)
  })
  image.addEventListener('mouseleave', () => {
    destinationsBackground1[i].style.opacity = '0'
    // console.log("background" + i)
  })
});


const images2 = gsap.utils.toArray('.image2 img');
const destinationsBackground2 = gsap.utils.toArray('.destinations-background .image-2 img')

images2.forEach((image, i) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true
    }
  })
  .fromTo(image, 
    {objectPosition: '0 100%'},
    {objectPosition: '0 0%', lazy: false, ease: 'none' }
  )

  image.addEventListener('mouseenter', () => {
    destinationsBackground2[i].style.opacity = '1'
    console.log("background " + i + " enter")
  })
  image.addEventListener('mouseleave', () => {
    destinationsBackground2[i].style.opacity = '0'
    console.log("background " + i + " leave")
  })
});


const images3 = gsap.utils.toArray('.image3 img');
const destinationsBackground3 = gsap.utils.toArray('.destinations-background .image-3 img')

images3.forEach((image, i) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: image,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true
    }
  })
  .fromTo(image, 
    {objectPosition: '0 100%'},
    {objectPosition: '0 0%', lazy: false, ease: 'none' }
  )

  image.addEventListener('mouseenter', () => {
    destinationsBackground3[i].style.opacity = '1'
    console.log("background " + i + " enter")
  })
  image.addEventListener('mouseleave', () => {
    destinationsBackground3[i].style.opacity = '0'
    console.log("background " + i + " leave")
  })
});

//in - animation 
gsap









//Footer Section
//Footer - Enter Animation
// const footerLogo = document.querySelector('footer .logo')
// gsap.timeline({
//   scrollTrigger: {
//     trigger: footerLogo,
//     start: 'top bottom',
//     end: 'top 60%',
//     scrub: true,
//     invalidateOnRefresh: true,
//   }
// }).from(footerLogo, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})

// const learnMoreElements = document.querySelectorAll('.learn-more *')
// learnMoreElements.forEach((element) => {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: element,
//       start: 'top bottom',
//       end: 'top 60%',
//       scrub: true,
//       invalidateOnRefresh: true,
//     }
//   }).from(element, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})
// })

// const travelGuideElements = document.querySelectorAll('.travel-guide *')
// travelGuideElements.forEach((element) => {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: element,
//       start: 'top 110%',
//       end: 'top 70%',
//       scrub: true,
//       invalidateOnRefresh: true,
//       // markers: true
//     }
//   }).from(element, {x: '20vw', autoAlpha: '0', lazy: false, ease: 'power2'})
// })



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



