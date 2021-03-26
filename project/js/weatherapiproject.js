const apiURL="https://api.openweathermap.org/data/2.5/onecall?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject)
    document.getElementById("weather").textContent=jsObject.current.weather[0].description;

    document.getElementById("current").textContent=((jsObject.current.temp-273.15)*(9/5)+32).toFixed(0);
    

    
    document.getElementById("humidity").textContent=jsObject.current.humidity+"%";
    document.getElementById("windspeed").textContent=jsObject.current.wind_speed;
    document.getElementById("windchill").textContent=doInputOutput(((jsObject.current.temp-273.15)*(9/5)+32),jsObject.current.wind_speed);
})




const forecastURL="https://api.openweathermap.org/data/2.5/onecall?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(forecastURL)
.then(function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const daily = jsonObject["daily"];
    for(let i=0; i<(daily.length-5); i++){
      
       
            
        
        let card= document.createElement("th");
        

const imagesrc="https://openweathermap.org/img/w/" + jsonObject.daily[i].weather[0].icon + ".png"; //note the concatenation
const desc =jsonObject.daily[i].weather[0].icon;
let image=document.createElement("img");
        image.setAttribute("src", imagesrc);
        image.setAttribute("alt", desc);
        card.appendChild(image);
       

        let td= document.createElement("td");
        td.textContent=((daily[i].temp.day-273.15)*(9/5)+32).toFixed(0)+ "ºF";
       
    card.appendChild(td);
document.querySelector("table.threeday").appendChild(card); 

document.querySelector("table.threeday").appendChild(card);




    
}

});





//this was my test for a city that had an active alert at least on 3/24/21 when I wrote this script. The page had no javascript errors with an active alert.

//const corpustestURL="https://api.openweathermap.org/data/2.5/onecall?lat=27.8006&lon=-97.3964&appid=d211895bcb1310c1dd13ddc706b3bb98"
//const alabamatestURL="https://api.openweathermap.org/data/2.5/onecall?lat=32.7504&lon=-86.7503&appid=d211895bcb1310c1dd13ddc706b3bb98"
//fetch(alabamatestURL)
const lakeURL="https://api.openweathermap.org/data/2.5/onecall?lat=48.0151&lon=-122.0637&appid=d211895bcb1310c1dd13ddc706b3bb98"
fetch(lakeURL)
.then(function(response){
    return response.json();
})
.then(function (jObject){
    console.table(jObject);
    
    const alerts=jObject["alerts"];
    let card2=document.createElement("div");
    if(jObject.hasOwnProperty("alerts")){
    for(let i=0; i<(alerts.length); i++){
        
        
    let extract=alerts[i].description;
    let p=document.createElement("p");
    p.textContent=extract;
    p.style.display="red";
    let btn=document.createElement("button");
    btn.innerHTML="Click to Close";
    btn.onclick=function(){
        card2.style.display="none";
    };
    card2.style.backgroundColor="red";
    card2.style.color="white";
  
    card2.appendChild(p);
    card2.appendChild(btn);
    document.querySelector("aside.weather-alert").appendChild(card2);

 
  
    
    }
  
}

});

