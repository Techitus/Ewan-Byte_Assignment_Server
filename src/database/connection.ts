import mongoose from 'mongoose';
import { envConfig } from '../config/env.config';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(envConfig.mongoUri|| '');
    console.log('Database connection successful');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); 
  }
};

export default connectDB;
