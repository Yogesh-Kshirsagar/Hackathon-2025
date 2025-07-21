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

