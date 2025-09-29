require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const authRoutes = require('./routes/authRoutes'); // ✅ added

const app = express();
app.use(express.json());
app.use(cors());

// server.js (add near other app.use routes)
const reportRoutes = require('./routes/reportRoutes');
// Mount reports after auth routes:
app.use('/api', reportRoutes);


// Health check
app.get('/api/health', (req, res) => {
  const dbStatus = db && db.threadId ? 'connected' : 'initialized';
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// ✅ add your routes
app.use('/api', authRoutes);

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
