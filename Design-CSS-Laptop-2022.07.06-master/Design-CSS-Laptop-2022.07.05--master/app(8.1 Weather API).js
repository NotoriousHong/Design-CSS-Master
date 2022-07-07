const API_KEY = "d7fae67c5203cebe88653d8bae68a947"

function onGeoOk(position){
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
        const PushPlaceCity = document.querySelector("#weather span:first-child")
        const PushPlaceWeather = document.querySelector("#weather span:last-child")
        
        PushPlaceCity.innerText = data.name;                                                                    //In here, the 'data' from the url 
        PushPlaceWeather.innerText = `${data.weather[0].main} / ${data.main.temp}`;                                
    });

}

function onGeoError(){
    alert("We couldn't find you, No weather for you");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
