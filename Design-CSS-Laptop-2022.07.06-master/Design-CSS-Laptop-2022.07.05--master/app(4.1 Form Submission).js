const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//function onLoginBottonClick() {
//    const username = loginInput.value;
//    if (username === "") {
//        alert("Please write your name");
//    } else if (username.length > 15) {
//        alert("Your name is too long");
//    }
//}

//loginButton.addEventListener("click", onLoginBottonClick);

//-> 이렇게 JS에서 작성해서 Login과정에서 User들에게 제약을 줄 수 있지만 이것은 좋은 방법이 아니다
//왜냐하면 이미 존재하는 html 기능에서 손쉽고 안정적으로 구현할 수 있기 때문이다.

function onLoginBottonClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBottonClick);
