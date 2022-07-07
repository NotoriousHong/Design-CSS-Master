//const loginForm = document.querySelector("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBottonClick() {
    console.log("Hello", loginInput.value);
}

loginButton.addEventListener("click", onLoginBottonClick);
