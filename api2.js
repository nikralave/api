let request = new XMLHttpRequest();

// function displayNicely(apiData) {
//     let newData = JSON.parse(apiData);
//     let count = 0;
//     for (let i in newData) {
//         count++;
//         document.getElementById("data").innerHTML += i + ": "+ newData[i] + "</br>"
//         console.log(newData[i]);
//         if(count == 7) {
//             break;
//         }
//     }
// }

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    console.log(newData);
    let htmlString = "<div><strong>City:</strong> " + newData.name + "</div>";
    
    htmlString += "<div><strong>Current Weather: </strong> "+ newData.weather[0].description + "</div>";
  document.getElementById("data").innerHTML = htmlString;


 htmlString += "<div><strong>Wind Speed: </strong> "+ newData.wind.speed + "</div>";
  document.getElementById("data").innerHTML = htmlString;
  
  htmlString += "<div><strong>Temperature: </strong> "+ newData.main.temp + "</div>";
  document.getElementById("data").innerHTML = htmlString;
}


request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
        displayNicely(this.responseText);
    }
}

var city = prompt("Please enter a city:");

let  appKey = "6ebea87dfc131fd5402906ce4b098ab8";

request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+ city + "in&APPID=" + appKey)

request.send();

