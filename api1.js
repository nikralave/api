let request = new XMLHttpRequest();

function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
    let count = 0;
    for (let i in newData) {
        count++;
        document.getElementById("data").innerHTML += i + ": "+ newData[i] + "</br>"
        console.log(newData[i]);
        if(count == 8) {
            break;
        }
    }
}

// function displayNicely(apiData) {
//     let newData = JSON.parse(apiData);
//   document.getElementById("data").innerHTML = "<div><strong>Name: </strong>" + newData.name + "</div>" + "<div><strong>Height: </strong>" + newData.height + "</div>" + "<div><strong>Gender: </strong>" + newData.gender + "</div>" + "<div><strong>Eye Colour: </strong>" + newData.eye_color + "</div>" +  "<div><strong>Birth Year: </strong>" + newData.birth_year + "</div>";
// }



request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = JSON.parse(this.responseText);
        displayNicely(this.responseText);
    }
}

request.open("GET", "https://swapi.co/api/people/1/")

request.send();