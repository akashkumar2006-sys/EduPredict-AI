from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import os

app = Flask(__name__)


# Load trained ML model
model = None

model_path = "model/model.pkl"

if os.path.exists(model_path):
    model = joblib.load(model_path)



# Home page
@app.route("/")
def home():
    return render_template("index.html")



# Prediction API
@app.route("/predict", methods=["POST"])
def predict():

    if model is None:
        return jsonify({
            "error": "Model not found"
        })


    try:

        # Accept JSON request from JavaScript
        if request.is_json:

            data = request.get_json()

            hours = data["hours_studied"]
            previous = data["previous_score"]
            attendance = data["attendance"]
            sleep = data["sleep_hours"]
            papers = data["sample_papers"]


        # Accept form request as backup
        else:

            hours = request.form["hours"]
            previous = request.form["previous"]
            attendance = request.form["attendance"]
            sleep = request.form["sleep"]
            papers = request.form["papers"]



        input_data = {

            "Hours_Studied": float(hours),

            "Previous_Score": float(previous),

            "Attendance": float(attendance),

            "Sleep_Hours": float(sleep),

            "Sample_Papers_Practiced": float(papers)

        }


        df = pd.DataFrame([input_data])


        prediction = model.predict(df)[0]


        return jsonify({

            "prediction": round(float(prediction), 2)

        })


    except Exception as e:

        return jsonify({

            "error": str(e)

        })



if __name__ == "__main__":

    app.run(debug=True)
