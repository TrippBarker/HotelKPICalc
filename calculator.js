const formInputs = document.querySelectorAll(".userIn");

const roomsAvailable = document.getElementById("roomsAvailable");
const roomsSold = document.getElementById("roomsSold");
const revenueIn = document.getElementById("revenueIn");

const occupancyResults = document.getElementById("occpancyResult");
const adrResults = document.getElementById("adrResult");
const revPARResults = document.getElementById("revPARResult");
const occDisp = document.getElementById("occGraphDisp");
const occGraph = document.getElementById("occGraph");

function updateResults() {
    // Remove all letters in form inputs with regex
    roomsAvailable.value = roomsAvailable.value.replace(/\D/g, "");
    roomsSold.value = roomsSold.value.replace(/\D/g, "");
    revenueIn.value = revenueIn.value.replace(/\D/g, "");
    let revVal = revenueIn.value;
    revenueIn.value = "$" + (revVal / 100).toFixed(2);
    // Display the occupancy results, check for division by zero
    if (Number(roomsAvailable.value) > 0){
        occupancyResults.textContent = (roomsSold.value / roomsAvailable.value * 100).toFixed(2) + "%";
        occDisp.textContent = (roomsSold.value / roomsAvailable.value * 100).toFixed(0) + "%";
        occGraph.style.setProperty("--percent", (roomsSold.value / roomsAvailable.value * 100).toFixed(0));
    } else {
        occupancyResults.textContent = "0.00%"
        occDisp.textContent = "0%"
        occGraph.style.setProperty("--percent", 0);
    }
    // Display ADR, check for division by zero
    if (roomsSold.value > 0){
        adrResults.textContent = "$" + ((revVal / 100) / roomsSold.value).toFixed(2);
    } else {
        adrResults.textContent = "$0.00";
    }
    // Display PAR, check for division by zero
    if (roomsAvailable.value > 0){
        revPARResults.textContent = "$" + ((revVal / 100) / roomsAvailable.value).toFixed(2);
    } else {
        adrResults.textContent = "$0.00";
    }
}

formInputs.forEach(input => {
    input.addEventListener("input", updateResults);
})