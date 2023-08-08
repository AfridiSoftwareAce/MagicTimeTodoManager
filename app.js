require('dotenv').config()
// import modules
const express = require('express');
const app=express()
// const userRoutes=require('./routes/user')
const db = require('./config/mongoose.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const timeRoutes = require('./routes/timeRoutes');
const todoRoutes = require('./routes/todoRoutes');

db()
  
  // Use routes
  app.use('/api/todos', todoRoutes);
  app.use('/time', timeRoutes);

  // Global error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

const port = process.env.PORT || 8000; // Ensure port is defined

app.listen(port, err => {
    if (err) {
        console.error('Error connecting to the server:', err);
    } else {
        console.log(`Server successfully connected at http://localhost:${port}`);
    }
});