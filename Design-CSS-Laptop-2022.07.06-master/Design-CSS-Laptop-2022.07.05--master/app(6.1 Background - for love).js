const images = [
    "1.jpg", "2.jpg", "3.jpg" 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const addImage = document.createElement("img");

addImage.src = `${chosenImage}`;

document.body.appendChild(addImage);


