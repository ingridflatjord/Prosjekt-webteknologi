/* Meny */
const coursesK ={
  Kylling:{
          Course:"Kyllingsalat",
              Price:59,
  },
  Laks:{
      Course:"Laksewrap",
      Price:49,
  },
  Skinke:{
        Course:"Skinkesandwich",
        Price:45,
  },

}

const coursesV ={
  Avocado:{
          Course:"Avocadotoast",
          Price:59,
  },
  bowl:{
      Course:"Smoothiebowl",
      Price:49,
  },
  Falaf:{
        Course:"Falafel",
        Price:45,
  },

}

const coursesD ={
  coffe:{
          Course:"Kaffe",
          Price:59,
  },
  juice:{
      Course:"Ferskpresset Appelsinjuice",
      Price:49,
  },
  Smoth:{
        Course:"Smoothie",
        Price:45,
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
