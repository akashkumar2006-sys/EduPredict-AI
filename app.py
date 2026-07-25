@app.route("/predict", methods=["POST"])
def predict():

    if model is None:
        return jsonify({
            "error": "Model not found"
        })


    if request.is_json:
        data = request.get_json()

        hours = data["hours_studied"]
        previous = data["previous_score"]
        attendance = data["attendance"]
        sleep = data["sleep_hours"]
        papers = data["sample_papers"]

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
        "prediction": round(float(prediction),2)
    })
