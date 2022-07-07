const h1 = document.querySelector("div.Hello:first-child h1");

function handleTitleClick() {
    const currnetColor = h1.style.color;
    let newColor;
    if(currnetColor === "blue") {
        newColor = "green";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}


h1.addEventListener("click", handleTitleClick);



//변수 2가지에 대해 헷갈려하시는 것에 대한 제 의견을 말씀드려보도록 하겠습니다.
//1. currentColor는 getter로써, 최근 color값을 복사하는 역할을 합니다. 그렇기에 의미론적으로 봤을 때 const로 선언하는 것이 적절합니다.
//2. newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당하는 역할을 합니다. 그리고 이것도 의미론적으로 봤을 때 값이 변경될 수 있다는 것을 염두에 두기 위해 let으로 선언하는 것이 적절합니다.
//3. 다들 아시겠지만 프로그래밍언어에서 "="(equal) 표시는 오른쪽에 있는 값을 왼쪽에 대입한다는 뜻입니다. 이를 염두에 두시면 코드를 이해하는데 편하실 것 같습니다.
//4. (참고) 함수 내에서 선언된 변수는 함수 밖에서는 존재하지 않습니다. 그렇기 때문에 const currentColor로 변수 선언을 하더라도, 함수가 호출될 때 마다 새로운 값을 받을 수 있습니다.

//이를 토대로 코드를 순차적으로 이해하면,

//1) click event 발생 및 함수 실행
//2) currentColor 변수 선언 후 h1.style.color 값 복사 (getter)
//3) newColor 변수 선언
//4) currentColor 현재 값 확인
//5) 조건에 따라 newColor에 "tomato" or "blue" 값 대입
//6) 마지막으로 h1.style.color에 newColor값 대입 (setter)






//막줄의 의미를 잘 모르시는 분들이 계셔서 도움이 되려나 싶지만 써봅니다...

//이걸 컴퓨터 입장에서 생각해보면 이해가 좀 더 편합니다.
//우리는 현재상태의색깔 값을 currentColor라는 이름의 변수에 저장해주고, 클릭했을 때 바뀌게 될 새로운 색깔값을 newColor라는 이름의 변수에 저장해줄거고 이걸로 글자색(h1.style.color)을 바꿔줄거죠? (const currentColor = h1.style.color; 라고 했다고 이제부터 현재상태의색깔은 h1.style.color다! 이게 아닙니다.)
//여기서 컴퓨터는 newColor가 무슨용도인지 모르고 그냥 이름으로써 알고있는겁니다.
//다시 코드로 돌아가보면 어쨋든 지금 currentColor에 h1.style.color로 현재데이터를 넣어줬으니 조건문을 통과하면서 비어있던(undefined상태) 변수newColor에는 tomato가 들어가게됩니다.
//근데 여기까지만으로는 컴퓨터가 이게 글자색을 바꾸라는 뜻인지를 모릅니다. 사람은 변수이름 지을 때 이미 의도를 갖고있었기 때문에 자연스럽게 알고있겠지만 컴퓨터는 newColor라는 변수에 tomato를 넣긴 했는데 뭐 어쩌라는건지 모르고있다는거죠. (newColor에 데이터만 들어가고 끝! 인 상태)
//그래서 반복문이 끝나는 바로 다음 줄에 h1.style.color = newColor;를 써줌으로써 글자색을 바꾸도록 해주어야합니다.