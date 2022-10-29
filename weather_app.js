const api_key = '1210254713360736499061f17ac801b0';
const search = document.getElementById('search');
const serch_btn = document.getElementById('serch_btn');
const weather = document.getElementById('weather')
const weather_details = document.getElementById('wedetail')
 
const now = new Date()
  .toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
  .toLowerCase();
 const date= new Date()
 let year=date.getFullYear()
 let month=date.getMonth()
 let day=date.getDate()
 


async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    // weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    data = await data.json()
    console.log(data);
    return showWeather(data)
}

function showWeather(data) {
    if(data.cod!= 200){
        weather.innerHTML=  `  <div>
        <h2>Ooops...😑 City not found </h2> 
         
     </div>
      `
    console.log("oops");
     
    return
    }
    weather.innerHTML=`
     
         
          <div>
            <h2 class="display-2"><strong>${data.main.temp}°C</strong></h2>
            <h2 class="text-muted mb-0">${data.name}</h2>
            <h5>${now}</h5>
            <h6>${day+"/"+month+"/"+year}</h6>
          </div>
          <div>
         
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""
              width="150px">
          </div>
        

         `
         weather_details.innerHTML=`<div class="flex-column">
         <p class="small"><strong>${data.main.humidity} g.m -3 </strong></p>
         <i class="fa-solid fa-sun-plant-wilt fa-3x mb-3"></i>
         <p class="mb-0"><strong>Humidity</strong></p>
       </div>
       <div class="flex-column">
         <p class="small"><strong>${data.main.feels_like}°C</strong></p>
         <i class="fa-solid fa-temperature-quarter fa-3x mb-3"></i>
         <p class="mb-0"><strong>Feels like</strong></p>
       </div>
       <div class="flex-column">
         <p class="small"><strong>${data.main.temp_min}°C</strong></p>
         <i class="fa-solid fa-temperature-full fa-3x mb-3"></i>
         <p class="mb-0"><strong>Temp max</strong></p>
       </div>
       <div class="flex-column">
         <p class="small"><strong>${data.main.temp_max}°C</strong></p>
         <i class="fa-solid fa-temperature-empty fa-3x mb-3"></i>
         <p class="mb-0"><strong>Temp min</strong></p>
       </div>
       <div class="flex-column">
         <p class="small"><strong>${data.wind.speed} Km/h</strong></p>
          
         <i class="fa-solid fa-wind fa-3x mb-3"></i>
         <p class="mb-0"><strong>Wind speed</strong></p>
       </div>`
}
console.log("ok");
serch_btn.addEventListener("click", function (e) {
    getWeather(search.value)
})

// https://api.openweathermap.org/data/2.5/weather?q=${user_city}&appid=1210254713360736499061f17ac801b0

