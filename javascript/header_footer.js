// Naviagtion bar
const header = document.getElementById('header')
function lagNav() {
  const headerElementer=
  `<div class ="main_navbar" id="navigationbar">
      
      <ul>
        <li ><a href="menu.html"> Meny </a></li>
        <li ><a href="openinghours.html"> Åpningstider </a></li>
        <li class="main_navbar"><a href="frontpage.html"><img src="../images/logo.png" class="logo" alt="logo"> </li>
        <li ><a href="information.html"> Informasjon </a></li>
        <li ><a href="frontpage.html"> Forside </a></li>
      </ul>
      <a class="burger" href="javascript:void(0)" onclick="changeNavbar()">&#9776;</a>
  </div>`

  return headerElementer
}

header.innerHTML = lagNav();

//When the burger are pressed, a drop-down menu will show.
function changeNavbar() {
  const header = document.getElementById("navigationbar")
  console.log("heiii");

  if (header.className === "main_navbar") {
    header.className += " responsive"
  } else {
    header.className = "main_navbar"
  }
}



const footer = document.getElementById('footer')

function lagFooter() {
    const footerElementer =

    '<div id="kontakt">'+
    '<div>'+
    '<form class="buttons" action="https://www.instagram.com/cafesaldo/">' +
        '<input id="instagram" type="image" src="../images/instagram.png" alt="Instagram">' +
    '</form>' +

    '<form class="buttons" action="https://www.facebook.com/">' +
      '<input id="facebook" type="image" src="../images/facebook.png" alt="Facebook">' +
    '</form>' +
    '</div>'+

      '<p><b><u>Kontakt</u></b></p>'+
      '<p id="tlf"> Tlf: <a href="tel:97969924">97969924</a></p>'+
      '<p id="mail"> Mail: <a href="mailto:cafesaldotrondheim@gmail.com">cafesaldotrondheim@gmail.com</a></p>'+
    '</div>'+


    '<div>'+

    '<ul id="apningstider_footer" style="list-style:none;">'+
      '<li><b><u>Åpningstider</u></b></li>'+
      '<li>Mandag - Fredag: <b>08.30 - 17.00</b></li>'+
      '<li>Lørdag: <b>10.00 - 15.00</b></li>'+
      '<li>Søndag: <b>Stengt</b></li>'+
    '</ul>'+
    '</div>'+

    '</footer>'

    return footerElementer
}

footer.innerHTML = lagFooter()

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
var small = "20px";
var large = "30px";
var NavBarElements = document.getElementsByClassName("main_navbar");

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 50) {


        for (var i = 0; i < NavBarElements.length; i++) {
            NavBarElements[i].style.fontSize = small;
            NavBarElements[i].style.height = "6rem"
        }
        document.getElementsByClassName("main_navbar").style.height = "6rem"
    } else {

        for (var i = 0, max = NavBarElements.length; i < max; i++) {
            NavBarElements[i].style.fontSize = large;
            NavBarElements[i].style.height = "9rem"



        }
        document.getElementById("main_navbar").style.height = "9rem"



    }
}
