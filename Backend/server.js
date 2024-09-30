const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cocktailRoutes = require('./Routes/cocktails')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cocktail_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err))

// Routes
app.use('/api', cocktailRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})