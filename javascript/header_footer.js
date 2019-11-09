// Naviagtion bar
const header = document.getElementById('header')
function lagNav() {
  const headerElementer=
  `<div class ="main_navbar" id="navigationbar">
      <a href=""><img src="../images/logo.png" class="logo" alt="logo"></a>
      <ul>
        <li><a href="menu.html"> Meny </a></li>
        <li><a href="openinghours.html"> Åpningstider </a></li>
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

/* Meny */
const coursesK ={
    Kylling:{
        Course:"Kyllingsalat",
        Price:"59 Kr",
    },
    Laks:{
        Course:"Laksewrap",
        Price:"49 Kr",
    },
    Skinke:{
        Course:"Skinkesandwich",
        Price:"45 Kr",
    },

}

const coursesV ={
    Avocado:{
        Course:"Avocadotoast",
        Price:"49 Kr",
    },
    bowl:{
        Course:"Smoothiebowl",
        Price:"45 Kr",
    },
    Falaf:{
        Course:"Falafel",
        Price:"45 Kr",
    },

}

const coursesD ={
    coffe:{
        Course:"Kaffe",
        Price:"29 Kr",
    },
    juice:{
        Course:"Ferskpresset Appelsinjuice",
        Price:"25 Kr",
    },
    Smoth:{
        Course:"Smoothie",
        Price:"45 Kr",
    },

}

var targetElement = document.getElementById('meat')
for (courseX in coursesK) {
    createCourselik(coursesK[courseX])
    console.log(coursesK[courseX])
}

var targetElement = document.getElementById('vegetarian')

for (courseX in coursesV) {
    createCourselik(coursesV[courseX])
    console.log(coursesV[courseX])
}
var targetElement = document.getElementById('drinks')

for (courseX in coursesD) {
    createCourselik(coursesD[courseX])
    console.log(coursesD[courseX])
}

function createCourselik(course) {
    node = document.createElement("li")
    node.setAttribute("class","retter")
    span = document.createElement("span")
    span.setAttribute("class","retter")
    node.appendChild(span)
    span.appendChild(document.createTextNode(course.Course))
    span2 = document.createElement("span")
    span2.setAttribute("class","retter")
    span2.appendChild(document.createTextNode(course.Price))
    node.appendChild(span2)
    targetElement.appendChild(node)

}

/* Kjøttretter */
// Set variables for key elements
const menuDiv = document.getElementById('menuDiv');
const menuToggle = document.getElementById('menuToggle');

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
const menuDiv1 = document.getElementById('menuDiv1');
const menuToggle1 = document.getElementById('menuToggle1');

// Start by adding the class "collapse" to the menuDiv
menuDiv1.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainmenuToggle1() {
    menuDiv1.classList.toggle('collapsed');
}

/* Drikke */
// Set variables for key elements
const menuDiv2 = document.getElementById('menuDiv2');
const menuToggle2 = document.getElementById('menuToggle2');

// Start by adding the class "collapse" to the menuDiv
menuDiv2.classList.add('collapsed');

// Establish a function to toggle the class "collapse"
function mainmenuToggle2() {
    menuDiv2.classList.toggle('collapsed');
}
