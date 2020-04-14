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
      if (cargoM > 10000) {
         cargoStatus.innerHTML =  "Too much mass for the shuttle to take off.";
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red"; 
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready for launch";
      }
         // stop the form submission
          event.preventDefault();

   });
});

