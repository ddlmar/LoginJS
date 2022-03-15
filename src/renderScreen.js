import formScreen from "./app.js";

const router = () => {
    const screen = document.getElementById("mainContainer");
    screen.innerHTML = formScreen.render();
};

window.addEventListener("load", router);