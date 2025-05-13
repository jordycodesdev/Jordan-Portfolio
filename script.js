function togglemenu() {
    const menu = document.getElementById("menuChoices");
    const arrow = document.getElementById("dropdown-arrow")
    const button = document.querySelector(".menu-dropdown");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    button.classList.remove("open");
    arrow.innerHTML = "&#x3e;"; 
    menu.style.width = `${button.offsetWidth}px`;
  } else {
    menu.classList.add("show");
    button.classList.add("open");
    arrow.innerHTML = "&#x2228;";
    menu.style.width = `${button.offsetWidth}px`;
  }
}

const typingwords= ["Developer", "Programmer", "Engineer"]
let whichword = 0;
let whichletter = 0;
let isDeleting = false;
const typingletter = document.getElementById("text-animation");
function typing() {
    const currentword = typingwords[whichword];
    const currentletter= currentword.substring(0, whichletter);
    typingletter.textContent = currentletter;
    if (!isDeleting && whichletter < currentword.length) {
        whichletter++;
        setTimeout(typing, 100)
    } else if (isDeleting && whichletter > 0 ) {
        whichletter--;
        setTimeout(typing, 50);
    }
    else {
        isDeleting = !isDeleting
        if (!isDeleting) {
            whichword = (whichword + 1) % typingwords.length;
        }
        setTimeout(typing, 1000)
    }
}
typing();