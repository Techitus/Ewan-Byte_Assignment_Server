import { config } from "dotenv";
config()

export const envConfig = {
    portNumber : process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    clientUrl : process.env.CLIENT_URL,
}