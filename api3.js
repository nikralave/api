let request = new XMLHttpRequest();


function displayNicely(apiData) {
    let newData = JSON.parse(apiData);
 //   console.log(newData);
    let htmlString = "";
    for (var i = 0; i < 3; i++) {
        htmlString += "<div><strong>Recipe Title:</strong> " + newData.hits[i].recipe.label + "</div>";
        htmlString += "<div><strong>Ingredient List: </strong> " + newData.hits[i].recipe.ingredientLines + "</div>";
        htmlString += "<div><strong>Link to website: </strong> " + newData.hits[i].recipe.url + "</div>";
        for(var j=0;j<newData.hits[i].recipe.healthLabels.length;j++){
            htmlString += "<div><strong>Health Labels: </strong> " + newData.hits[i].recipe.healthLabels[j] + "</div>";
        }
        var serving = newData.hits[i].recipe.yield;
        var calories = newData.hits[i].recipe.calories;
        var caloriesPerServing = parseInt(calories)/parseInt(serving);
        caloriesPerServing = caloriesPerServing.toFixed(0);
         htmlString += "<div><strong>Servings: </strong> " + serving + "</div>";
         htmlString += "<div><strong>Calories per serving: </strong> " +  caloriesPerServing + "</div>";
        document.getElementById("data").innerHTML = htmlString;
    }
}


request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayNicely(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("data").innerHTML = "<strong>Ingredient not found. Please try again!</strong>";
    }
}



function submitIngredient() {
    let appid = "3755737a";
    let appKey = "e8d286856a2775535f230e0f8d05c433";

    let searchBarIngredient = document.getElementById("recipeForm")["ingredient"].value;
    
    let requestString = "https://api.edamam.com/search?q=" + searchBarIngredient;
    var e = document.getElementById("preselect");
    var preselect = e.options[e.selectedIndex].value;
    if(preselect != ""){
        requestString += " " + preselect;
    }

    requestString += "&app_id="+appid+"&app_key="+appKey+"&from=0&to=3";
       
    let nuts = document.getElementById("recipeForm")["nutFree"].checked;
    if(nuts ==true){
        requestString += "&health=tree-nut-free";
    }
    let calories = document.getElementById("recipeForm")["maxCalories"].value;
    if(calories !=""){
        calories = "&calories=0-"+calories;
    }
    requestString += calories;
    console.log(requestString);
  
  //  request.open("GET", requestString);
//    request.send();
}
