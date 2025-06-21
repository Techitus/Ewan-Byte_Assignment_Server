import express from 'express';
const app = express();
app.use(express.json());
import cors from 'cors';
import noteRoutes from "./routes/notes.route";
import { envConfig } from './config/env.config';
app.use(
  cors({
    origin: envConfig.clientUrl || 'http://localhost:3000',
    credentials: true, 
  })
)
app.use('/', noteRoutes);
export default app;