from flask import Flask, render_template, request
import joblib
import pandas as pd

app = Flask(__name__)

# Load trained model
model = joblib.load("model/model.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    hours = float(request.form["hours"])
    previous = float(request.form["previous"])
    attendance = float(request.form["attendance"])
    sleep = float(request.form["sleep"])
    papers = float(request.form["papers"])

    data = pd.DataFrame([[hours, previous, attendance, sleep, papers]],
                        columns=[
                            "Hours_Studied",
                            "Previous_Score",
                            "Attendance",
                            "Sleep_Hours",
                            "Sample_Papers_Practiced"
                        ])

    prediction = model.predict(data)[0]

    return render_template(
        "index.html",
        prediction=round(prediction, 2)
    )

if __name__ == "__main__":
    app.run(debug=True)
