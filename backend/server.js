const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.post('/submit', (req, res) => {
    const { income, debt, followers, category, favoriteColor} = req.body;
    console.log({ income, debt, followers, category, favoriteColor});
    res.status(200).json({ message: 'Data received successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
