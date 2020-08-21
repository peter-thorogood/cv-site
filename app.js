
// burger menu
const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
const menu = document.querySelector(".menu");
    if (menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "";
      }})



// Hidden small navlinks
let coll = document.getElementsByClassName("collapsible");
let i;
      
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
} 