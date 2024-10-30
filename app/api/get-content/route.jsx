import UserContent from "@/Model/usersContent"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export async function GET(req){

    const email= req.nextUrl.searchParams.get('email')
    await connectDB()
    const res= await UserContent.find({email})
    
    return NextResponse.json({data:res})
}