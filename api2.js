let request = new XMLHttpRequest();


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


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>City not found. Please try again!</strong>"; 
    }
}



function submitCity() {
    
city = document.getElementById("cityForm")["city"].value;

let  appKey = "6ebea87dfc131fd5402906ce4b098ab8";

request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=" + appKey)

request.send();
}
