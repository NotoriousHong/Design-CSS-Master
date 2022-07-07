function onGeoOk(position){
    const lati = position.coords.latitude;
    const longi = position.coords.longitude;
    console.log("You live in", lati, longi);
}

function onGeoError(){
    alert("We couldn't find you, No weather for you");

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

