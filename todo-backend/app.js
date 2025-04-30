const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

mongoose.connect('mongodb://localhost:27017/todoapp')
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.log(err));
