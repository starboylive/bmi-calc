

function bmiCalc() {

    let weightVal = document.getElementById("weight").value;
    let heightVal = document.getElementById("height").value;
    let newH = heightVal * heightVal;

    resultVal = weightVal / newH;

    document.getElementById("results").innerHTML = `Results: <span id="res">${resultVal.toFixed(3)}</span>`;

}