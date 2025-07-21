import google.generativeai as genai
import json

import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Configure the API key
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

class UnifiedLoanReviewAgent:
    def __init__(self, applicant_data):
        """
        Initializes the agent with the applicant's raw data.
        
        Args:
            applicant_data (pd.DataFrame): DataFrame containing the alternative data.
        """
        self.applicant_data_dict = applicant_data.to_dict(orient='records')[0]
        
        # We specify that we want a JSON response from the model
        generation_config = genai.GenerationConfig(response_mime_type="application/json")
        self.model = genai.GenerativeModel(
            'gemini-2.5-flash',
            generation_config=generation_config
        )

    def generate_recommendation(self):
        """
        Generates a comprehensive loan recommendation using a single, powerful prompt.
        """
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

        print("Gemini is performing unified analysis and making a recommendation...")
        response = self.model.generate_content(prompt)
        
        # The response.text should be a clean JSON string based on our prompt
        return json.loads(response.text)
