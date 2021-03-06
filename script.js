'use strict';

document.addEventListener('DOMContentLoaded', start);

function start() {
  // invoke the function so it can run
  navOpen();

  const nav = document.querySelector('nav');
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (window.matchMedia('(min-width: 765px)').matches) {
      if (prevScrollpos > currentScrollPos) {
        nav.style.top = '0';
      } else {
        nav.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    }
  };
}

//function to open the nav
const navOpen = () => {
  //get the burger menu
  const burgerMenu = document.querySelector('.burger');
  //get the ul from the nav
  const navUl = document.querySelector('.nav-links');
  //get all the li links inside the ul that has a class of .nav-links
  const navLinks = document.querySelectorAll(' .nav-links li');

  //toogle nav and open/close it
  burgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('nav-active');

    // animate the links
    navLinks.forEach((link, index) => {
      //if there already exists an animation then reset it after it is animated
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        //else add this animation
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    //toogle the burger animation
    burgerMenu.classList.toggle('toggle');
  });
};

//cubes
const createCube = () => {
  //get her section
  const heroSection = document.getElementById('hero');
  //create squares
  const square = document.createElement('span');
  //give a class to the square
  square.classList.add('mysquare');
  //sizes
  let size = Math.floor(Math.random() * 50);
  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';
  //
  square.style.top = Math.random() * innerHeight + 'px';
  //
  square.style.left = Math.random() * innerWidth + 'px';
  //append the cubes to hero
  const Colors = ['#000', '#ccec3f', '#fff'];
  const randomColor = Math.floor(Math.random() * Colors.length);

  square.style.background = Colors[randomColor];

  heroSection.appendChild(square);
  //set the timeout for cubes to dissapear
  setTimeout(() => {
    square.style.opacity = '.1';
  }, 4000);
  setTimeout(() => {
    square.style.display = 'none';
  }, 5000);
};
// create new cubes every amount of time given
setInterval(createCube, 1500);

// gsap

gsap.to('.landingImg', {
  scrollTrigger: {
    trigger: '.section-header-h2',
    scrub: true,
  },
  duration: 1,
  y: 30,
  opacity: '-1.6',
});

gsap.from('.project-1', {
  scrollTrigger: {
    trigger: '.project-1',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.project-2', {
  scrollTrigger: {
    trigger: '.project-2',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.project1', {
  scrollTrigger: {
    trigger: '.project1',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.project2', {
  scrollTrigger: {
    trigger: '.project2',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.project3', {
  scrollTrigger: {
    trigger: '.project3',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.project4', {
  scrollTrigger: {
    trigger: '.project4',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.skills-section', {
  scrollTrigger: {
    trigger: '.skills-section',
  },
  y: 300,
  duration: 1,
  opacity: 0,
});
gsap.from('.waves', {
  scrollTrigger: {
    trigger: '.waves',
  },
  y: 100,
  duration: 1,
  opacity: 0,
});
