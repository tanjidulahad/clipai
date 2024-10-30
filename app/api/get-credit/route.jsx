import { checkUserExist } from "@/utils/checkUserExist"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export async function GET(req){
    await connectDB()
    const email= req.nextUrl.searchParams.get('email')
    const user= await checkUserExist(email)

    return NextResponse.json({user})
}