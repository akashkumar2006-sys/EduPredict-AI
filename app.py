from flask import Flask, render_template, request
import joblib
import pandas as pd
import os

app = Flask(__name__)

# Load model
model = None
if os.path.exists("model/model.pkl"):
    model = joblib.load("model/model.pkl")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():
    if model is None:
        return render_template(
            "index.html",
            prediction="Model not trained yet!"
        )

    data = {
        "Hours_Studied": float(request.form["hours"]),
        "Previous_Score": float(request.form["previous"]),
        "Attendance": float(request.form["attendance"]),
        "Sleep_Hours": float(request.form["sleep"]),
        "Sample_Papers_Practiced": float(request.form["papers"])
    }

    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]

    return render_template(
        "index.html",
        prediction=round(prediction,2)
    )


if __name__ == "__main__":
    app.run(debug=True)
