var loc = "Current Location";

async function gotLocation(position){
    const loca = position.coords.latitude + ":" + position.coords.longitude;
    loc = loca;
}



function failToGet(){
    console.log("there is some issue");
}

$(".loc").click(async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation , failToGet);
    $(".result").text(loc);
});