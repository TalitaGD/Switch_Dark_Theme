const input = document.querySelector("input");
const body = document.querySelector("body");

const ToggleThemeMode = () => {
    body.classList.toggle("dark");
};

input.onchange = ToggleThemeMode;