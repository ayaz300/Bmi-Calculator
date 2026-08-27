function calculate() {
    let weight = document.getElementById("weight").value;
    let height_feet = document.getElementById("height_feet").value;
    let height_inches = document.getElementById("height_inches").value;
    let result = document.getElementById("result")
    let height = (height_feet * 0.3048) + (height_inches * 0.0254)
    let bmi = weight / (height**2)

    if(weight.trim() === "" || Number(weight) <= 0) {
        result.innerHTML = "Please provide positive weight";
        return;
    } else if(height_feet.trim() === "" || Number(height_feet) <= 0) {
        result.innerHTML = "Please provide positive height value.";
        return;
    }


    if(bmi < 18.5) {
        result.innerHTML = `BMI : ${bmi.toFixed(1)} (Underweight)`;
    } else if(bmi >= 18.5 && bmi < 25) {
        result.innerHTML = `BMI : ${bmi.toFixed(1)} (Normal)`;
    } else if(bmi >= 25 && bmi < 30) {
        result.innerHTML = `BMI : ${bmi.toFixed(1)} (Overweight)`;
    } else if (bmi >= 30) {
        result.innerHTML = `BMI : ${bmi.toFixed(1)} (Obese)`;
    }
}
