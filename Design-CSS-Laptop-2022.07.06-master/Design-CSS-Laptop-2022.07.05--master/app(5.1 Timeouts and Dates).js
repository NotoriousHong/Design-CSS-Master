const clock = document.querySelector("h2#clock")


function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

// setInterval(sayHello, 5000);  // <-- continuously execute
// setTimeout(sayHello, 5000);  // <-- execute once


//console에

//typeof Date;

//를 입력해보시면 function 이라고 알려줍니다.
//JavaScript에는 생성자 함수라는 것이 있는데요.
//new 를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다.
//이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다.
//생성자 함수는 arguments를 받을 수 있습니다.
//console 에

//const date = new Date();

//를 입력하여 date 변수를 선언하시고,

//typeof date;

//를 입력해보시면 object를 반환하는 것을 볼 수 있습니다.
//이렇게 생성한 date 객체를 우리는 이전시간에 배웠던대로
//object.property 와 같은 형식으로 사용할 수 있습니다.
//(강의 내용 중 #2.6 참고)

//이는 Python의 Class와 유사하며,
//더 궁금한 것이 있으시다면 구글에
//생성자 함수 (with JavaScript)에 대해 검색해보시기 바랍니다.