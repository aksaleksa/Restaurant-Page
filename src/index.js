import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
const content = document.querySelector("#content");

const elements = loadHome();
for (let element of elements) {
    content.appendChild(element);
}

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    const elements = loadHome();
    for (let element of elements) {
        content.appendChild(element);
    }
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    const elements = loadMenu();
    for (let element of elements) {
        content.appendChild(element);
    }
})

contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    const elements = loadContact();
    for (let element of elements) {
        content.appendChild(element);
    }
})