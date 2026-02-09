import express from 'express';
import { json, urlencoded } from 'body-parser';
import { authenticate } from './middleware/auth';
import { apiRoutes } from './routes/api';

const app = express();

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(authenticate);

// API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
