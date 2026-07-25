from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import os

app = Flask(__name__)


# Load model
model = None

model_path = "model/model.pkl"

if os.path.exists(model_path):
    model = joblib.load(model_path)



@app.route("/")
def home():
    return render_template("index.html")



@app.route("/predict", methods=["POST"])
def predict():

    if model is None:
        return jsonify({
            "error": "Model not found"
        })


    data = request.get_json()


    input_data = {

        "Hours_Studied": float(data["hours_studied"]),

        "Previous_Score": float(data["previous_score"]),

        "Attendance": float(data["attendance"]),

        "Sleep_Hours": float(data["sleep_hours"]),

        "Sample_Papers_Practiced": float(data["sample_papers"])

    }


    df = pd.DataFrame([input_data])


    prediction = model.predict(df)[0]


    return jsonify({

        "prediction": round(float(prediction),2)

    })



if __name__ == "__main__":
    app.run(debug=True)
