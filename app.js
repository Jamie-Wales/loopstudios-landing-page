
//header
const burgerBtn = document.getElementsByClassName('navigation__burger-menu');
const menu = document.querySelector('.navigation__mobile');
const logo = document.querySelector('.logo')


function transformBtn() {
    burgerBtn[0].classList.toggle('open');
    burgerBtn[0].classList.toggle('hide-for-desktop')
    burgerBtn[0].classList.toggle('fixed');
    logo.classList.toggle('fixed')
}

function toggleHidden() {
    menu.classList.toggle('hidden');
}


burgerBtn[0].addEventListener('click', () => {
    toggleHidden();
    transformBtn();

});

//lazy-loading CSS background of our-creations section
document.addEventListener("DOMContentLoaded", () => {
    let lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let image = entry.target;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach((image) => {
        imageObserver.observe(image);
      });
    } else {  
      let lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      const lazyload = () => {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout( () => {
          let scrollTop = window.pageYOffset;
          lazyloadImages.forEach(img => {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
