import mongoose from "mongoose";


export async function connectToDB(){
    try {      
        await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING as string)

        console.log("Connected to DB successfully")
    } catch (error) {
        console.log("Failed to connect to DB", error)
    }
}