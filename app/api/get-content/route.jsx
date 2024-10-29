import UserContent from "@/Model/usersContent"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export async function GET(req){
    await connectDB()
    const res= await UserContent.find({email:"tanjidulahad@gmail.com"})
    
    return NextResponse.json({data:res})
}