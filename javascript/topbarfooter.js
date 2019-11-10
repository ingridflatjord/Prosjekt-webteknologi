// Naviagtion bar
const header = document.getElementById('header');

function lagNav() {
    return `<div class ="topnav" id="header">
      <a href="frontpage.html"><img src="../images/logo.png" class="logo" alt="logo"></a>
      <ul>
        <li><a href="menu.html"> Meny </a></li>
        <li><a href="openinghours.html"> Åpningstider </a></li>
        <li><a href="information.html"> Informasjon </a></li>
        <li><a href="frontpage.html"> Forside </a></li>
      </ul>
      <a class="burger" href="javascript:void(0)" onclick="changeNavbar()">&#9776;</a>
  </div>`
}

header.innerHTML = lagNav();

//When the burger are pressed, a drop-down menu will show.
function changeNavbar() {
    const header = document.querySelector(".topnav");
    console.log("heiii");

    if (header.className === "topnav") {
        header.className += " responsive"
    } else {
        header.className = "topnav"
    }
}

// Footer
const footer = document.getElementById('footer')

function lagFooter() {
    const footerElementer =
        `
     
    <div id="kontakt">
        <form class="buttons" action="https://www.instagram.com/cafesaldo/">
            <input id="instagram" type="image" src="../images/instagram.png" alt="Instagram">
        </form>
        <form class="buttons" action="https://www.facebook.com/">
          <input id="facebook" type="image" src="../images/facebook.png" alt="Facebook">
        </form>
      <p><b><u>Kontakt</u></b></p>
      <p id="tlf"> Tlf: <a href="tel:97969924">97969924</a></p>
      <p id="mail"> Mail: <a href="mailto:cafesaldotrondheim@gmail.com">cafesaldotrondheim@gmail.com</a></p>
    </div>
   
    </footer>`

    return footerElementer
}

footer.innerHTML = lagFooter()
