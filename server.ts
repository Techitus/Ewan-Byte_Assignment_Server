import app from "./src/app";
import { envConfig } from "./src/config/env.config";
import connectDB from "./src/database/connection";
import cors from 'cors'; 

connectDB()

function startServer(){
    const port = envConfig.portNumber ;
    app.listen(port, ()=>{
        console.log(`Server is running on http://localhost:${port}`)
    })
}
startServer()

app.use(cors({
  origin: envConfig.clientUrl,
  credentials: true,
}))