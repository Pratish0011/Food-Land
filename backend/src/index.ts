import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import { connectToDB } from './db';


connectToDB()

const app = express();

app.use(express.json())


app.get('/',(req: Request, res: Response)=>{
   
    res.json({
        message: "Hello!"
    })


})


app.listen(3000, ()=>{
    console.log("Listen on http://localhost:3000");
    
})