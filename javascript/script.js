//Topbaren endrer seg når skjermstørrelsen endres.
const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        }
        else {
          link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 + 1.3}s"
        }
      })
    })

}

navSlide()
// Automatisk slideshow av 5 ulike bilder på forsiden av nettsiden. Hvert bilde vises i 5 sek.
let images = 0

function slideshow() {
  let count
  let slides = document.getElementsByClassName("front_images")
  for (let count = 0; count < slides.length; count++) {
    slides[count].style.display = "none"
  }

  images++
  if (images > slides.length) {images = 1}
  slides[images-1].style.display = "block"

  setTimeout(slideshow, 5000)
}

slideshow()

/* Meny */


/* Kjøttretter */
// Set variables for key elements
var menuDiv = document.getElementById('menuDiv');
var menuToggle = document.getElementById('menuToggle');

// Start by adding the class "collapse" to the menuDiv
menuDiv.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainmenuToggle() {
    menuDiv.classList.toggle('collapsed');
}


// Add a click event to run the mainmenuToggle function
menuToggle.addEventListener('click', mainmenuToggle);

/* Vegetar */
// Set variables for key elements
var menuDiv1 = document.getElementById('menuDiv1');
var menuToggle1 = document.getElementById('menuToggle1');

// Start by adding the class "collapse" to the menuDiv
menuDiv1.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainmenuToggle1() {
    menuDiv1.classList.toggle('collapsed');
}

/* Drikke */
// Set variables for key elements
var menuDiv2 = document.getElementById('menuDiv2');
var menuToggle2 = document.getElementById('menuToggle2');

// Start by adding the class "collapse" to the menuDiv
menuDiv2.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainmenuToggle2() {
    menuDiv2.classList.toggle('collapsed');
}



