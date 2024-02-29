let $ =document;
let data = [
    {
        city:'tehran',deg:14,humidity:12,windspeed:15,weather:"sunny"
    },{
        city:'shiraz',deg:9,humidity:15,windspeed:20,weather:"cloud"
    },{
        city:'tabriz',deg:2,humidity:5,windspeed:10,weather:"snow"
    },{
        city:'mashad',deg:8,humidity:14,windspeed:30,weather:"rain"
    },{
        city:'zahedan',deg:20,humidity:3,windspeed:24,weather:"sunny"
    },
];
let cityName = $.getElementById('city-name');
let cityDegree = $.getElementById('degree');
let cityHumidity = $.getElementById('humidity');
let cityWindSpeed = $.getElementById('windspeed');
let weatherText = $.getElementById('waether-text');
let weatherIcon = $.getElementById('weather-icon');
let dataReq;
let getUserInput;

let button = $.getElementById('btn')
button.addEventListener('click',function(){
    getUserInput = $.getElementById('userInput').value;
    data.find(function(item){
        if(getUserInput==item.city){
         dataReq= item
        }
    })
    console.log(dataReq)
    // if(dataReq = undefined){
    //     cityName.classList.add('city-name')
    //     cityName.innerHTML = "city not found";


    //     cityDegree.classList.remove('degree');
    //     cityHumidity.classList.remove('humidity');
    //     cityWindSpeed.classList.remove('windspeed');
    // }else{
        if(dataReq){
    cityName.classList.add('city-name')
    cityName.innerHTML = "Weather in "+dataReq.city;

    cityDegree.classList.add('degree');
    cityDegree.innerHTML= dataReq.deg+"&deg;C";

    weatherIcon.setAttribute('src','img/'+dataReq.weather+".png");
    weatherText.innerHTML = dataReq.weather;

    cityHumidity.classList.add('humidity')
    cityHumidity.innerHTML="humidity: "+dataReq.humidity+"%";

    cityWindSpeed.classList.add('windspeed');
    cityWindSpeed.innerHTML ="Wind Speed: "+dataReq.windspeed+" km/h"
// }
}else{
    cityName.classList.add('city-name')
    cityName.innerHTML = "city not found";
    cityDegree.innerHTML= "";
}
    console.log('clicked')
})