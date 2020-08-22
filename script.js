//function to open the nav
const navOpen = () => {
  //get the burger menu
  const burgerMenu = document.querySelector(".burger");
  //get the ul from the nav
  const navUl = document.querySelector(".nav-links");
  //get all the li links inside the ul that has a class of .nav-links
  const navLinks = document.querySelectorAll(" .nav-links li")


  //toogle nav and open/close it
  burgerMenu.addEventListener("click", () => {
    navUl.classList.toggle("nav-active");

    // animate the links
    navLinks.forEach((link, index) => {
      //if there already exists an animation then reset it after it is animated
      if (link.style.animation) {
        link.style.animation = ""
      } else {
        //else add this animation
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`
      }
    });

    //toogle the burger animation
    burgerMenu.classList.toggle("toggle");
  });

}
// invoke the function so it can run
navOpen();

//End of function to open the nav

console.log("terminal is working");

//cubes 
const createCube = () => {
  //get her section
  const heroSection = document.getElementById('hero');
  //create squares
  const square = document.createElement('span');
  //give a class to the square
  square.classList.add('mysquare');
  //sizes
  let size = Math.random() * 50;
  square.style.width = 20 + size + 'px';
  square.style.height = 20 + size + 'px';
  //
  square.style.top = Math.random() * innerHeight + 'px';
  //
  square.style.left = Math.random() * innerWidth + 'px';
  //append the cubes to hero

  heroSection.appendChild(square);
  //set the timeout for cubes to dissapear
  setTimeout(() => {
    square.style.display = 'none';
  }, 5000);

}
// create new cubes every amount of time given
setInterval(createCube, 1000);