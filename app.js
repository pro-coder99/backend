const express = require('express');
const cors = require('cors');
// const connectDB = require('shared-orm-library/src/db');
const userRoutes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());

// connectDB();

app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
