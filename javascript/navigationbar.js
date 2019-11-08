/ Naviagtion bar
const header = document.getElementById('header')
function lagNav() {
  const headerElementer=
  `<div class ="main_navbar"id="navigationbar">
      <ul>
        <li><a href="menu.html"> Meny </a></li>
        <li><a href="openinghours.html"> Åpningstider </a></li>
        <li><a href="">
          <img src="../images/logo.png" class="logo" alt="logo"></a></li>
        <li><a href="information.html"> Informasjon </a></li>
        <li><a href="frontpage.html"> Forside </a></li>
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
  }
  else {
    header.className = "main_navbar"
  }
}

