import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;
const client = new OpenAI();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/mock-success-score", (req, res) => {
  res.json({
    "full-name": "Test User",
    "total-score": 1000,
    "education": 150,
    "education-explanation": "You have a bachelor's degree from a reputable institution...",
    "education-improvement": "Consider pursuing graduate studies...",
    "work": 180,
    "work-explanation": "...",
    "work-improvement": "...",
    "financial": 160,
    "financial-explanation": "...",
    "financial-improvement": "...",
    "health": 140,
    "health-explanation": "...",
    "health-improvement": "...",
    "social": 130,
    "social-explanation": "...",
    "social-improvement": "...",
    "community": 120,
    "community-explanation": "...",
    "community-improvement": "...",
    "legal": 120,
    "legal-explanation": "...",
    "legal-improvement": "none",
  });
});

app.post("/process-success-score", async (req, res) => {
    const formData = req.body;
    console.log("Received formData:", formData);

    if (!formData || Object.keys(formData).length === 0) {
        return res.status(400).json({ error: "No form data received" });
      }

  try {
    const prompt = `
        Based on the following user data, calculate a "Success Score" (on a scale of 0-1400):
        ${JSON.stringify(formData, null, 2)}
  
        Based on the user data provided, calculate a "Success Score" on a scale from 0 to 1400. The score should reflect the user's potential for success across multiple domains, including education, work, financial stability, health, social engagement, community involvement, and legal standing. 

Each of the following seven categories must be meticulously evaluated, and each category contributes up to 200 points. A detailed rationale for each category score is required, providing a clear explanation of the factors that contributed to the assigned score.

**Scoring Criteria:**

- **Framework:** The full score of 1400 is reserved for exceptionally high achievers. Most individuals should expect a score ranging between 600 and 1150. This is a rigorous evaluation and should not lenient whatsoever.
- **Age Consideration:** While younger individuals may demonstrate potential for growth, older individuals may have more experience but may also face more significant challenges. This must be factored into the scoring for a balanced and accurate assessment.

The total score is the sum of all individual subcategory scores. The maximum total is 1400 points. Ensure that each category is rigorously scored and explained with accuracy and consistency. If the score is high enough and there is no actionable improvement notes, please return "none".

Each explanation response should be atleast 100 WORDS. Each improvement response should be at least 50 WORDS. Speak directly to the user in a stern, professional manner. Do not use "I." or "we." Use "you" and "your" instead.
**Response Format:**

{
  "full-name": "<string>", 
  "total-score": <number>,
  "education": <number>,
  "education-explanation": "<string>",
  "education-improvement": "<string>",
  "work": <number>,
  "work-explanation": "<string>",
  "work-improvement": "<string>",
  "financial": <number>,
  "financial-explanation": "<string>",
  "financial-improvement": "<string>",
  "health": <number>,
  "health-explanation": "<string>",
  "health-improvement": "<string>",
  "social": <number>,
  "social-explanation": "<string>",
  "social-improvement": "<string>",
  "community": <number>,
  "community-explanation": "<string>",
  "community-improvement": "<string>",
  "legal": <number>,
  "legal-explanation": "<string>",
  "legal-improvement": "<string>",
  }
      `;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant that evaluates user profiles for a success score based on personal and professional data.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const resultText = response.choices[0].message.content.trim();
    console.log("OpenAI API Response:", resultText); // Log the API response

    try {
        const result = JSON.parse(resultText); // parse actual OpenAI response
        res.status(200).json(result); // send the parsed JSON
      } catch (parseError) {
        console.error("Failed to parse OpenAI response:", parseError.message);
        res.status(500).json({ error: "Failed to parse success score response from AI." });
      }
  } catch (error) {
    console.error(
      "Error processing success score:",
      error.response?.data || error.message || error
    );
    res.status(500).send("Error processing success score");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


