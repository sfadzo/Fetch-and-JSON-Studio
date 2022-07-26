window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const astronauts = document.getElementById("container");

            let astroList = "";
            for (let i = 0; i < json.length; i++){
            astroList += `
            <div class= "astronaut">
                <div class="bio">
                <h3>${json[i].firstName}</h3>
                
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace} </li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills}</li>
                             </ul>
          </div>
          <img class="avatar" src="${json[i].picture}">
       
            
          </div>
            `
            }
            astronauts.innerHTML = astroList;
            
            let count = document.getElementById("count");
            count.innerHTML= `The Astronaut count is ${json.length}` ;
        });

    });
});
//TODO: add code here