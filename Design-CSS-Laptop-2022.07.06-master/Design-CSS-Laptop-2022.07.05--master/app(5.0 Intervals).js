const clock = document.querySelector("h2#clock")


function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000);




//#id input = 해당 id(안)에 있는 input을 가리킴
//h2#id = h2태그 중 해당 ID를 가리킴
//코드를 보시면 #id input 으로 작성한 코드는 (form id="") (input /) (/form)
//이렇게 form 안에 속해있는 반면
//h2#id는 (h2 id ="")이렇게 되어있습니다.