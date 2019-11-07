const header = document.getElementById('header');
function lagNav() {
  const headerElementer=
  '<nav>'+
    '<div class="topnav">'+
      '<ul class="main-topbar">'+
        '<li><a href="menu.html"> Meny </a></li>'+
        '<li><a href="openinghours.html"> Åpningstider </a></li>'+
        '<li><img src="../images/logo.png" class="logo" alt="logo"></li>'+
        '<li><a href="information.html"> Informasjon </a></li>'+
        '<li><a href="frontpage.html"> Forside </a></li>'+
      '</ul>'+
    '</div>'+
  '</nav>';

  return headerElementer;
}

header.innerHTML = lagNav();


const footer = document.getElementById('footer')

function lagFooter() {
    const footerElementer =
    '<form class="buttons" action="https://www.instagram.com/cafesaldo/">' +
        '<input id="instagram" type="image" src="../images/instagram.png" alt="Instagram">' +
    '</form>' +

    '<form class="buttons" action="https://www.facebook.com/">' +
      '<input id="facebook" type="image" src="../images/facebook.png" alt="Facebook">' +
    '</form>' +

    '<div id="kontakt">'+
      '<p><b><u>Kontakt</u></b></p>'+
      '<p id="tlf"> Tlf: <a href="tel:97969924">97969924</a></p>'+
      '<p id="mail"> Mail: <a href="mailto:cafesaldotrondheim@gmail.com">cafesaldotrondheim@gmail.com</a></p>'+
    '</div>'+

    '<ul id="apningstider_footer" style="list-style:none;">'+
      '<li><b><u>Åpningstider</u></b></li>'+
      '<li>Mandag - Fredag: <b>08.30 - 17.00</b></li>'+
      '<li>Lørdag: <b>10.00 - 15.00</b></li>'+
      '<li>Søndag: <b>Stengt</b></li>'+
    '</ul>'+

    '</footer>'

    return footerElementer
}

footer.innerHTML = lagFooter()