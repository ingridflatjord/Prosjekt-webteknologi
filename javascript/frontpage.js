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

