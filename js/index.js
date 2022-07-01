$(document).ready(function () {

  $('.nav a').click(function () {
    console.log("clicked");
    $('.nav a.active').removeClass('active');
    console.log(this);
    $(this).addClass('active');
  });
});


var particles_config = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1cb698"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#1cb698"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": true
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 170.52652093416066,
        "line_linked": {
          "opacity": 0.19743011796449564
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

particlesJS('particles-js', particles_config, function () {
  console.log('callback - particles.js config loaded');
});


//  GSAP
const profileTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-container",
    start: "-=95%",
    end: "+=200",
    scrub: 1
  }
});


profileTl
  .to(".profile-title", 1, { opacity: 1, y: -25, ease: Power1.easeInOut }, 0)
  .to(".profile-image", 1, { opacity: 1, x: 25, y: -25, borderRadius: 5, ease: Power1.easeInOut }, 0)
  .to(".left-divider", 1, { width: '25%', ease: Power1.easeInOut }, 0)
  .to(".profile-description", 1, { opacity: 1, y: -25, ease: Power1.easeInOut }, 1)

  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-container",
      start: "-=80%",
      end: "+=400",
      scrub: 1
    }
  });

  servicesTl
  .to(".col-background", 1, { opacity: 1, y: -25, ease: Power1.easeInOut, stagger: 0.2 }, 1)
