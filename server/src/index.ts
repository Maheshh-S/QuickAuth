import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user.route'
import authRouter from './routes/auth.route';

const app = express();

// Middleware
app.use(express.json()); 

// Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ Mongo error:", err));

// Routes
app.use('/api/user', userRoute)
app.use('/api/auth',authRouter)














// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
