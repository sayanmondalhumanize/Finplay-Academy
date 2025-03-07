import { Mistral } from "@mistralai/mistralai";
import { API_CONFIG } from "../config";


const CACHE_KEY = "investment_advice_cache";

const mistral = new Mistral({
  apiKey: `${API_CONFIG.mistralAPIKey}` ?? "",
});

export const getInvestmentAdvice = async (age, income, riskProfile) => {
  try {
    console.log("mistral_key = ", API_CONFIG.mistralAPIKey);
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (
        parsedData.age === age &&
        parsedData.income === income &&
        parsedData.riskProfile === riskProfile
      ) {
        return parsedData;
      }
    }

    const result = await mistral.chat.complete({
      model: "mistral-tiny",
      stream: false,
      messages: [
        {
          content: `You are an expert financial advisor providing investment recommendations. Based on the user's details, generate a structured JSON response with investment advice.
          
          User Information:
          Age: ${age}
          Income: ${income} INR
          Risk Profile: ${riskProfile}

          Response Format: Provide only a valid JSON object as output, without markdown or additional text.

          {
            "user_profile": {
              "age": ${age},
              "income": ${income},
              "risk_profile": "${riskProfile}"
            },
            "investment_recommendation": {
              "asset_allocation": {
                "stocks": "<percentage>",
                "bonds": "<percentage>",
                "real_estate": "<percentage>",
                "gold": "<percentage>",
                "crypto": "<percentage>",
                "mutual_funds": "<percentage>",
                "index_funds": "<percentage>",
                "cash": "<percentage>"
              },
              "recommended_stocks": ["Stock1", "Stock2", "Stock3"],
              "recommended_funds": ["Fund1", "Fund2", "Fund3"],
              "recommended_real_estate_options": ["Option1", "Option2"],
              "crypto_advice": "<Investment approach for cryptocurrency>",
              "long_term_goals": "<Advice on long-term financial goals>",
              "short_term_goals": "<Advice on short-term investments>",
              "risk_mitigation_strategies": "<Ways to manage investment risks>"
            }
          }`,
          role: "user",
        },
      ],
    });
  
    // Handle the result
    console.log(result);
    const data = result.choices[0].message.content;
    
    // Store in local storage
    localStorage.setItem(CACHE_KEY, JSON.stringify({data, age, income, riskProfile }));
    const b = localStorage.getItem(CACHE_KEY);
    console.log(b);
    const jsonData = JSON.parse(b)

    return jsonData["data"];

  } catch (error) {
    console.error("Error fetching investment advice:", error);
    return null;
  }
};
