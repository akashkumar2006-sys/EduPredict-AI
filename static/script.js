/* =====================================
   EduPredict AI - Final JavaScript
===================================== */


document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#predictionForm");
    const resultCircle = document.querySelector(".result-circle h2");
    const resultText = document.querySelector(".result-circle span");
    const resetBtn = document.querySelector(".reset-btn");
    const predictBtn = document.querySelector(".predict-btn");


    /* ---------- Prediction ---------- */

    form.addEventListener("submit", async (event) => {

        event.preventDefault();


        const inputs = form.querySelectorAll("input");

        let values = [];


        inputs.forEach(input => {
            values.push(Number(input.value));
        });



        // Validation

        if(values.some(value => isNaN(value))){

            alert("Please enter valid values for all fields.");
            return;

        }



        predictBtn.innerHTML = "Predicting...";

        predictBtn.disabled = true;



        try{


            const response = await fetch("/predict",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },


                body:JSON.stringify({

                    hours_studied:values[0],

                    previous_score:values[1],

                    attendance:values[2],

                    sleep_hours:values[3],

                    sample_papers:values[4]

                })

            });



            const data = await response.json();



            if(data.prediction !== undefined){


                resultCircle.innerHTML =
                Math.round(data.prediction) + "%";


                resultText.innerHTML =
                "Predicted Performance";


            }

            else{

                resultCircle.innerHTML="--";
                resultText.innerHTML="Prediction Failed";

            }



        }


        catch(error){

            console.log(error);

            resultCircle.innerHTML="--";

            resultText.innerHTML=
            "Server Error";

        }



        finally{

            predictBtn.innerHTML="Predict Score";

            predictBtn.disabled=false;

        }


    });



    /* ---------- Reset ---------- */


    resetBtn.addEventListener("click",()=>{


        form.reset();


        resultCircle.innerHTML="--";

        resultText.innerHTML=
        "Your Result Appears Here";


    });



});
