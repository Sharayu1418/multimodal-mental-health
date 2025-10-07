from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from other origins

# Store PHQ-9 answers in memory (temporary storage)
phq9_data = {"answers": [], "totalScore": 0, "severity": "Minimal"}

@app.route('/submit-phq9', methods=['POST'])
def submit_phq9():
    # Get the JSON data sent in the request
    data = request.json
    answers = data.get('answers', [])

    # Validate answers
    if len(answers) != 9:
        return jsonify({"error": "Invalid number of answers. Exactly 9 answers are required."}), 400

    # Calculate the total score
    total_score = sum(answers)

    # Determine the severity
    severity = interpret_severity(total_score)

    # Save data in memory
    global phq9_data
    phq9_data = {"answers": answers, "totalScore": total_score, "severity": severity}

    # Return the result
    return jsonify({"totalScore": total_score, "severity": severity})

@app.route('/get-phq9-results', methods=['GET'])
def get_phq9_results():
    return jsonify(phq9_data)

def interpret_severity(score):
    if score >= 20:
        return "Severe"
    elif score >= 15:
        return "Moderately Severe"
    elif score >= 10:
        return "Moderate"
    elif score >= 5:
        return "Mild"
    else:
        return "Minimal"

if __name__ == '__main__':
    app.run(port=5005)
