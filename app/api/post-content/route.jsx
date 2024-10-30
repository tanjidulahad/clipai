import usersContent from "@/Model/usersContent"
import connectDB from "@/utils/connectDB"
import { NextResponse } from "next/server"

export async function POST(req){
    const {email,content}= await req.json()
    const usercontent= new usersContent({
        email:email,
        title:content.title,
        description:content.description,
        content:JSON.stringify(content)
    })

    await usercontent.save()

    return NextResponse.json({data:usercontent})
}