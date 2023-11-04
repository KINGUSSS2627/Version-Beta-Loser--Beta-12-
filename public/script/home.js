// var mini = true;
const navlinkText = document.querySelectorAll(".navlink-text");
const main = document.querySelector("div.main");
let isOpen = true;

function closeSidebar() {
    toggleSidebar(false);
    isOpen = false;
}
function openSidebar() {
    toggleSidebar(true);
    isOpen = true;
}

function toggleSidebar(mini) {
  if (mini) {
    document.getElementById("mySidebar").style.width = "250px";
    main.style.marginLeft = "310px";
    navlinkText.forEach((element) => {
        element.classList.remove("hidden");
        element.classList.add("visible")
        element.style.display = "inline";
    });
  } else {
    document.getElementById("mySidebar").style.width = "85px";
    main.style.marginLeft = "145px";
    navlinkText.forEach((element) => {
        element.classList.remove("visible");
        element.classList.add("hidden");
        element.style.display = "none";
    });
  }
}

const menu = document.querySelector("div.menu-logo-container");

function menuAction() {
    if (isOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

menu.addEventListener("click", menuAction);