const express = require('express');
const cors = require('cors');
const db = require('./configs/db');
const app = express();

require('dotenv').config();

//Router
const projectRouter = require('./routes/projectRouter');
const profileRouter = require('./routes/profileRouter');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
db.connect();

app.get('/', (req, res) => {
    res.send('Server is ready !!!');
});

app.use('/api/projects', projectRouter);
app.use('/api/profile', profileRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
