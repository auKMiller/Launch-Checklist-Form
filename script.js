// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let fuelL = Number(fuelLevel.value);
      let cargoM = Number(cargoMass.value);
      let pilotN = String(pilotName.value);
      let coPi = String(copilotName.value);
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let launchStatus = document.getElementById("launchStatus");
      if (fuelLevel.value === "" || cargoMass.value === "" || pilotName.value === "" || copilotName.value === ""){
         alert("All fields are required!");
      } else if (isNaN(fuelL) || isNaN(cargoM) || !isNaN(pilotN) || !isNaN(coPi)) {
         alert("Must be valid information.");
      } else { 
         document.getElementById("faultyItems").style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotN} is Ready.`
         copilotStatus.innerHTML = `Copilot ${coPi} is Ready.`
      }
      if (fuelL < 10000) {
         fuelStatus.innerHTML =  "Not enough fuel for the journey.";
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }
   

      
         // stop the form submission
          event.preventDefault();

      
            function myChecklist() {
               document.getElementById("faultyItems");
            }
            // The list of shuttle requirements, the div with the id faultyItems, 
            //should be updated if something is not ready for launch.

            // If the user submits a fuel level that is too low (less than 10,000 liters), 
            //change faultyItems to visible with an updated fuel status stating that there 
            //is not enough fuel for the journey. The text of the h2 element, launchStatus, 
            //should also change to "Shuttle not ready for launch" and the color should change 
            //to red.
            
            // If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
            
            // If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch"
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
