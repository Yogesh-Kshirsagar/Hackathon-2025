import pandas as pd
import json
import UnifiedLoanReviewAgent

# 1. Create the dataframe for call
alternative_data_df = pd.DataFrame([{
"farm_size_acres": 15,
"vegetation_index": 0.81, # Healthy crops
"avg_monthly_mobile_income": 650,
"utility_payment_ontime_rate": 0.98, # Very consistent
"recent_market_price_stability": "Stable"
}])

# 2. Instantiate and run the UnifiedGeminiAgent
unified_agent = UnifiedLoanReviewAgent.UnifiedLoanReviewAgent(applicant_data=alternative_data_df)
recommendation_json = unified_agent.generate_recommendation()

# 3. Print the structured output
print(json.dumps(recommendation_json, indent=2))

'''
Response recieved for this query

{
  "risk_analysis": {
    "risk_level": "Low",
    "confidence_score": 9,
    "key_positive_factors": [
      "vegetation_index",
      "utility_payment_ontime_rate",
      "recent_market_price_stability",
      "avg_monthly_mobile_income",
      "farm_size_acres"
    ],
    "key_negative_factors": []
  },
  "loan_recommendation": {
    "decision": "Approve",
    "justification": "The applicant demonstrates strong creditworthiness despite lacking a formal credit history, primarily due to several highly favorable alternative data points. The high vegetation index (0.81) indicates robust crop health and strong potential for a successful harvest, which directly translates to income generation. An exceptional utility payment on-time rate of 98% showcases remarkable financial discipline and reliability, a critical indicator for repayment capability. Furthermore, stable recent market prices provide a predictable income environment, reducing market-related risks. The consistent average monthly mobile income of $650, combined with a decent farm size of 15 acres, suggests a stable operational base capable of supporting micro-loan repayments. All presented data points align to form a very positive risk profile.",
    "conditions": null
  }
}
'''