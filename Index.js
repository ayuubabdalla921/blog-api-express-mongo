const express = require('express');
const cors = require('cors');
require('dotenv').config();          // <-- muhiim: .env

const connectDB = require('./db');

const BlogRoutes = require('./routers/Blogrouters');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', BlogRoutes);

const PORT = process.env.PORT || 5000;

// ku xiro DB ka hor inta aadan dhageysan
(async () => {
  try {
    await connectDB();               // <-- wacida
    console.log('✅ DB ready');

    app.use('/api/posts', (req, res) => {
      res.send('Posts API');
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
})();
