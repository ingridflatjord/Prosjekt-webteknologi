/* Meny */
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
