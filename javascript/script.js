//Topbaren endrer seg når skjermstørrelsen endres.
const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".nav-links")
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
      //Toggle now
      nav.classList.toggle("nav-active")

      //Adding a nice delay between each choise
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
