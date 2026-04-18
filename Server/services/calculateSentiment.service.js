const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env?.Gemini_API_Key);

const calulateSentiment = async (newsData) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
        You are an expert Quantitative Financial Sentiment Analyst. Your task is to process news headlines and determine their projected impact on stock market sentiment.

        ### ANALYSIS GUIDELINES:
        1. **Sentiment Scale:** -1.0 (Highly Bearish) to +1.0 (Highly Bullish). 0.0 is Neutral.
        2. **Impact Weighting:** - Keywords like "Inflation", "Fed", "Interest Rate", "Ceasefire", "War", "Earnings Beat", or "Liquidity" should carry higher weight.
        - Use nuanced values (e.g., -0.8 for a major crash, -0.2 for mild concern).
        3. **Consistency:** Ensure you analyze the headline within a general market context.

        ### OUTPUT RULES (CRITICAL):
        1. Return ONLY a pure JSON array of objects.
        2. The format MUST be: [{"index": number, "sentiment": number}, ...]
        3. DO NOT include markdown formatting (no \`\`\`json tags).
        4. DO NOT include any introductory or concluding text. 
        5. Return the exact number of objects corresponding to the input.

        ### DATA TO ANALYZE:
        ${JSON.stringify(newsData.map((n, i) => ({ index: i, title: n.title })))}
        `;
  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleanedJson = text.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanedJson);
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    return newsData.map((_, i) => ({ index: i, sentiment: 0 }));
  }
};

module.exports = calulateSentiment;
