// create a 2D array to store temperature [[day1.day,day1,night][day2.day,day2,night]]
let temperatures = [[-99,-99],[-99,-99],[-99,-99],[-99,-99]];

// Store temperature values in the array
function getTemperatures(){
    for(let i = 0; i<=3; i++)
    {
        temperatures[i][0]=document.querySelector("#day-temp-" + (i+1)).innerText;
        temperatures[i][1]=document.querySelector("#eve-temp-" + (i+1)).innerText;
    }
    console.log("Temperatures stored");
}

function menuClickedmessage(element){
    alert("Loading weather report...")
}

function ClosingCookieWindow(){
    document.querySelector(".cookie-banner").style.visibility = 'hidden';
}

// Probably over complicated this function as I wanted to keep it dynamic and always calculates the conversion. Not static values
function setTempUnit(element){
    if (element.value == "farenheit"){
        console.log("Set temp to Farenheit");
        convertTemperature_CtoF()
    }else if (element.value == "celsius")
    {
        console.log("Set temp to celsius");
        convertTemperature_FtoC();
    }

    for(let i = 0; i<=3; i++)
    {
        document.querySelector("#day-temp-" + (i+1)).innerText = temperatures[i][0];
        document.querySelector("#eve-temp-" + (i+1)).innerText = temperatures[i][1];
    }
}

function convertTemperature_CtoF(){
    for(let i=0; i<=3; i++){

        temperatures[i][0]=Math.round(temperatures[i][0]*(9/5)) + 32;
        temperatures[i][1]=Math.round(temperatures[i][1]*(9/5)) + 32;
    }
    console.log("Temperatures converted to Farenheit");
}

function convertTemperature_FtoC(){
    for(let i=0; i<=3; i++){
        temperatures[i][0]=Math.round((temperatures[i][0]-32) * (5/9));
        temperatures[i][1]=Math.round((temperatures[i][1]-32) * (5/9));
    }
    console.log("Temperatures converted to Celcius");
}


getTemperatures();
console.log("File loaded");

