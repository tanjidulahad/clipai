import UserContent from "@/Model/usersContent"
import { NextResponse } from "next/server"

export async function GET(req){

    const email= req.nextUrl.searchParams.get('email')
    
    const res= await UserContent.find({email})
    
    return NextResponse.json({data:res})
}