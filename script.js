 const btnE1 = document.getElementById("btm") ; 
const bmiInputE1  = document.getElementById("bmi-");
const WeightConditionE1 = document.getElementById("Weight Condition");
function calcBMI()
{
    const heightE1 = document.getElementById("height").value / 100;
    const weightE1 = document.getElementById("weight").value ;
    const bmi = weightE1 / (heightE1 * heightE1);
    
    bmiInputE1.value = bmi ; 

    if(bmi < 18.5) 
        {
            WeightConditionE1.innerText = "Under Weight"
        }
    else if (bmi >= 18.5 && bmi<=24.9)
        {
            WeightConditionE1.innerText = "Normal Weight"
        }
    else if (bmi >= 25 && bmi <= 29.9)
    {
        WeightConditionE1.innerText = "OverWeight"
    }

    else if (bmi <= 30)
    {
        WeightConditionE1.innerText = "Obesity"
    }    
}
btnE1.addEventListener("click" , calcBMI);