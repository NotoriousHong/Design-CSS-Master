const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "Username";   // <--- 본인이 반복되는 string을 사용할 경우에 Java는 이 오류를 지적해주지 않기 때문에 네가 username이라는 string을 여러번 쓰고 싶다면 USERNAME_KEY라는 변수를 만들어서 오류가 났을 경우에 잡을 수 있도록 만들어준다.



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);


function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = "Hello " + savedUsername;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



