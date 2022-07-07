const images = [
    "LA Beach.jpg", "LA Hollywood.jpg", "LA night lights.jpg", "LA parm tree.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const addImage = document.createElement("img");

addImage.src = `${chosenImage}`;

document.body.appendChild(addImage);


//appendChild를 사용할 때 body에 넣고 싶은 위치에 정확히 넣으려면 어떻게 하나요?
//영상에서만 봤을 때는 맨 마지막에 들어가는 것 같은데, 중간에 태그를 넣고싶은 경우는 어떻게 하나요?

//insertBefore() 메소드를 사용하시면 됩니다
//이 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다.
//const h2 = document.querySelector("#clock")
//document.body.insertBefore(bgImage, h2);
//두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 싶은 노드이고 h2는 참조할 노드입니다. 즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가되게 됩니다.


