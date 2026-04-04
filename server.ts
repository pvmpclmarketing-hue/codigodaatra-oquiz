import express from 'express';
import cors from 'cors';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Meta Conversions API Config
  // Use environment variables if available, otherwise use the provided values
  const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || 'EAANwNj2vcaMBREVfH4Q2H9XTZCtfYVGkp02kwycQKY7Pe2xjzO34S0Lzoy0VRZCm1ktZCG8lQRyvoYuRddZBlAYzNL9uWhjQexFNioP61dER6T324Yl0rJjo7Wjy1zonNVnaV37O0FaTsZCAOcewQ6MZAidnwpEjDdO6LfLeqeZBBxmLxwMxOj80SJTfFCzqwZDZD';
  const META_PIXEL_ID = process.env.META_PIXEL_ID || '25771387532534834';

  // Endpoint to send events to Meta Conversions API
  app.post('/api/meta-event', async (req, res) => {
    const { eventName, eventData, userData } = req.body;

    try {
      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${META_PIXEL_ID}/events`,
        {
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              action_source: 'website',
              event_source_url: req.headers.referer || '',
              user_data: {
                client_ip_address: req.ip,
                client_user_agent: req.headers['user-agent'],
                ...userData,
              },
              custom_data: eventData,
            },
          ],
          access_token: META_ACCESS_TOKEN,
        }
      );

      console.log(`Meta CAPI Success: ${eventName}`, response.data);
      res.json({ success: true, data: response.data });
    } catch (error: any) {
      console.error(`Meta CAPI Error: ${eventName}`, error.response?.data || error.message);
      res.status(500).json({ success: false, error: error.response?.data || error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
