let peso = 70; 
let altura = 1.75; 
function calcularBMI(peso, altura) {
    let bmi = peso / (altura * altura);
    let categoria;
    if (bmi < 18.5) {
        categoria = "Bajo peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        categoria = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }
    console.log("BMI:", bmi.toFixed(2), "-", categoria);
}
calcularBMI(peso, altura);