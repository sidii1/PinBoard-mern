import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/notes', notesRoutes);

// Serve static frontend in production
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.resolve(__dirname, './frontend/NoteFrontendTemplate/dist');
  app.use(express.static(buildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// Start server after DB connects
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
