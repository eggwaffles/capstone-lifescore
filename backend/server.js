import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import OpenAI from "openai";
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;
const client = new OpenAI();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.post('/log-form-data', (req, res) => {
  console.log('Received formData:', req.body);
  res.status(200).send('FormData logged successfully!');
});

app.post('/process-success-score', async (req, res) => {
    const formData = {
        // Personal Information
        fullName: { value: "Jane Smith", isValid: true },
        birthday: { value: "1990-05-15", isValid: true },
        streetAddress: { value: "123 Main St", isValid: true },
        city: { value: "San Francisco", isValid: true },
        state: { value: "CA", isValid: true },
        zipCode: { value: "94105", isValid: true },
        phoneNumber: { value: "555-123-4567", isValid: true },
        email: { value: "jane.smith@example.com", isValid: true },
        ssn: { value: "123456789", isValid: true },
      
        // Family Background
        maritalStatus: { value: "Married", isValid: true },
        numberOfChildren: { value: "2", isValid: true },
        householdSize: { value: "4", isValid: true },
        ethnicBackground: { value: "Asian", isValid: true },
        religiousAffiliation: { value: "None", isValid: true },
        primaryLanguage: { value: "English", isValid: true },
        parentEducationLevel: { value: "Bachelor's Degree", isValid: true },
        householdIncome: { value: "150000", isValid: true },
      
        // Education Data
        highestEducation: { value: "PhD", isValid: true },
        recentSchool: { value: "Stanford University", isValid: true },
      
        // Profession Data
        industry: { value: "Technology", isValid: true },
        employmentStatus: { value: "Full-Time", isValid: true },
        jobTitle: { value: "Senior Software Engineer", isValid: true },
        company: { value: "TechCorp Inc", isValid: true },
        yearsInRole: { value: "5", isValid: true },
        promotionReceived: { value: "Yes", isValid: true },
        referenceEmail: { value: "manager@techcorp.com", isValid: true },
        employmentGaps: { value: "No", isValid: true },
      
        // Financial Data
        monthlyIncome: { value: "12500", isValid: true },
        monthlyExpenses: { value: "4500", isValid: true },
        liquidAssets: { value: "80000", isValid: true },
        longTermInvestments: { value: "150000", isValid: true },
        outstandingDebt: { value: "25000", isValid: true },
        onTimePayments: { value: "Always", isValid: true },
        creditUtilization: { value: "Low (<30%)", isValid: true },
        creditLimit: { value: "30000", isValid: true },
        emergencyFund: { value: "6+ months", isValid: true },
        bankruptcy: { value: "No", isValid: true },
        financialAssistance: { value: "None", isValid: true },
      
        // Health Data
        currentDiagnoses: { value: "None", isValid: true },
        pastDiagnoses: { value: "Asthma", isValid: true },
        generalHealth: { value: "Excellent", isValid: true },
        smokeOrVape: { value: "No", isValid: true },
        alcoholConsumption: { value: "Occasionally", isValid: true },
        exerciseFrequency: { value: "4+ times/week", isValid: true },
        sleepHours: { value: "7-8", isValid: true },
        completedCheckups: { value: "Physical, Dental", isValid: true },
        medications: { value: "None", isValid: true },
        mentalHealthSupport: { value: "Therapist (monthly)", isValid: true },
        wearableDevice: { value: "Yes (Apple Watch)", isValid: true },
        dailySteps: { value: "8000", isValid: true },
      
        // Social Data
        activeSocialMedia: { value: "Yes", isValid: true },
        totalFollowers: { value: "1200", isValid: true },
        engagementFrequency: { value: "Weekly", isValid: true },
        linkedinConnections: { value: "500+", isValid: true },
        communities: { value: "WomenInTech, JS Meetup", isValid: true },
        mentoredSomeone: { value: "Yes", isValid: true },
        beenMentored: { value: "Yes", isValid: true },
        volunteering: { value: "Yes", isValid: true },
        monthlyVolunteerHours: { value: "8", isValid: true },
        eventAttendance: { value: "Quarterly", isValid: true },
        communitySupport: { value: "High", isValid: true },
      
        // Legal Data
        misdemeanorConviction: { value: "No", isValid: true },
        felonyConviction: { value: "No", isValid: true },
        pendingCharges: { value: "No", isValid: true },
        incarceration: { value: "No", isValid: true },
        rehabilitationProgram: { value: "No", isValid: true },
        lawsuitDefendant: { value: "No", isValid: true },
        eviction: { value: "No", isValid: true },
        validDriversLicense: { value: "Yes", isValid: true },
        movingViolations: { value: "None", isValid: true },
        duiConviction: { value: "No", isValid: true },
        atFaultAccident: { value: "No", isValid: true },
        paroleViolation: { value: "No", isValid: true },
        legalDisputes: { value: "No", isValid: true },
      };      
  
    try {
      const prompt = `
        Based on the following user data, calculate a "Success Score" (on a scale of 0-100) and provide a brief explanation:
        ${JSON.stringify(formData, null, 2)}
  
        Respond in the following JSON format:
        {
          "score": <number>,
          "explanation": "<string>"
        }
      `;
  
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are an assistant that evaluates user profiles for a success score based on personal and professional data.",
          },
          {
            role: "user",
            content: prompt,
          }
        ],
        temperature: 0.7,
      });
  
      const resultText = response.choices[0].message.content.trim();
      const result = JSON.parse(resultText);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error processing success score:', error.response?.data || error.message || error);
      res.status(500).send('Error processing success score');
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


