let selectelement = document.querySelector("select");
let logo = document.querySelector("img");

selectelement.addEventListener("change", changeTheme); 
  
function changeTheme() {
   let current = selectelement.value;
   if (current == "dark") {
       logo.src = "images/byui-logo_white2.png";
       document.body.classList.add("dark");
    //    change body to dark mode
    //    change logo to new logo
   } else {
       logo.src = "images/byui-logo_blue.webp";
       document.body.classList.remove("dark");
    //    change dark class from body
    // change logo to original logo
   }
}
