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
        Course:"Appelsinjuice",
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


/* Buttons to activate the CSS animation - code sourced from: https://codepen.io/davidcochran/pen/RNOOEO */
/* Kjøttretter */

const menuDiv = document.getElementById('menuDiv');
const menuToggle = document.getElementById('menuToggle');

menuDiv.classList.add('collapsed');

function mainmenuToggle() {
    menuDiv.classList.toggle('collapsed');
}

menuToggle.addEventListener('click', mainmenuToggle);

/* Vegetar */
const menuDiv1 = document.getElementById('menuDiv1');
const menuToggle1 = document.getElementById('menuToggle1');

menuDiv1.classList.add('collapsed');

function mainmenuToggle1() {
    menuDiv1.classList.toggle('collapsed');
}

/* Drikke */
const menuDiv2 = document.getElementById('menuDiv2');
const menuToggle2 = document.getElementById('menuToggle2');

menuDiv2.classList.add('collapsed');

function mainmenuToggle2() {
    menuDiv2.classList.toggle('collapsed');
}
