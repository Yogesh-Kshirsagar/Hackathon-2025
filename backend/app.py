from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import pandas as pd
import os
import json
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Configure Gemini API
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

app = Flask(__name__)
CORS(app)

class UnifiedLoanReviewAgent:
    def __init__(self, applicant_data):
        self.applicant_data_dict = applicant_data.to_dict(orient='records')[0]

        generation_config = genai.GenerationConfig(response_mime_type="application/json")
        self.model = genai.GenerativeModel(
            'gemini-2.5-flash',
            generation_config=generation_config
        )

    def generate_recommendation(self):
        prompt = f"""
        You are a senior risk and loan officer for a financial institution specializing in micro-loans 
        for small farmers and businesses who lack a formal credit history. Your process is two-step:

        1.  **Risk Analysis:** Analyze the provided 'alternative_data' to determine the applicant's creditworthiness.
        2.  **Loan Recommendation:** Based on your risk analysis, make a final loan recommendation.

        **Alternative Data for Applicant:**
        ```json
        {json.dumps(self.applicant_data_dict, indent=2)}
        ```

        **Your Task:**
        Carefully review the data and return a JSON object with the following structure. Do not include any text outside of the JSON object.

        {{
          "risk_analysis": {{
            "risk_level": "Choose one: Very Low, Low, Medium, High, Very High",
            "confidence_score": "A number from 1 (low confidence) to 10 (high confidence) in your risk assessment.",
            "key_positive_factors": ["List the data points that support creditworthiness."],
            "key_negative_factors": ["List the data points that indicate risk."]
          }},
          "loan_recommendation": {{
            "decision": "Choose one: Approve, Deny, Approve with Conditions",
            "justification": "Provide a detailed narrative explaining WHY you made this decision, referencing your risk analysis.",
            "conditions": "If the decision is 'Approve with Conditions', specify them here (e.g., 'Loan amount reduced to $X', 'Shorter repayment term of Y months'). Otherwise, this should be null."
          }}
        }}
        """

        response = self.model.generate_content(prompt)
        return json.loads(response.text)

@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        # Convert JSON to DataFrame
        applicant_df = pd.DataFrame([data])

        # Create agent and generate response
        agent = UnifiedLoanReviewAgent(applicant_df)
        recommendation = agent.generate_recommendation()

        return jsonify(recommendation)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)