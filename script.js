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
         document.getElementById("faultyItems").style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         console.log(0);
      } else if (isNaN(fuelL) || isNaN(cargoM) || !isNaN(pilotN) || !isNaN(coPi)) {
         alert("Must be valid information.");
         document.getElementById("faultyItems").style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         console.log(1);
        } 
         if (fuelL < 10000 && cargoM > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilotN} is Ready.`
            copilotStatus.innerHTML = `Copilot ${coPi} is Ready.`
            fuelStatus.innerHTML =  "Not enough fuel for the journey.";
            cargoStatus.innerHTML =  "Too much mass for the shuttle to take off.";
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            console.log(3);   
         } else if (fuelL < 10000 && cargoM < 10000 && fuelL != "") {
            pilotStatus.innerHTML = `Pilot ${pilotN} is Ready.`
            copilotStatus.innerHTML = `Copilot ${coPi} is Ready.`
            fuelStatus.innerHTML =  "Not enough fuel for the journey.";
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            console.log(4);
         } else if (fuelL >= 10000 && cargoM > 10000) {
            pilotStatus.innerHTML = `Pilot ${pilotN} is Ready.`
            copilotStatus.innerHTML = `Copilot ${coPi} is Ready.`
            cargoStatus.innerHTML =  "Too much mass for the shuttle to take off.";
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            console.log(5); 
          } else if (fuelL >= 10000 && cargoM <10000) {
            pilotStatus.innerHTML = `Pilot ${pilotN} is Ready.`
            copilotStatus.innerHTML = `Copilot ${coPi} is Ready.`
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            document.getElementById("faultyItems").style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
             console.log(6);
          }
         // stop the form submission
          event.preventDefault();
         
   });
});

