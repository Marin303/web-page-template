function openTab(evt, add) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(add).style.display = "block";
  evt.currentTarget.className += " active";

}
/* let button = document.querySelector("button")
let backgroundImage = document.querySelector(".background-image")
let usluge = document.querySelector("#usluge")

button.addEventListener("click", toggleBackgroundImage)

function toggleBackgroundImage() {
  if (backgroundImage.style.display === "none") {
    backgroundImage.style.display = "block"
  } else {
    backgroundImage.style.display = "none"
  }
} */
