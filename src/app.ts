import express from 'express';
const app = express();
app.use(express.json());
import noteRoutes from "./routes/notes.route";

app.use('/', noteRoutes);
export default app;