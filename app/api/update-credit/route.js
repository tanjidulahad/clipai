import { findUser } from "@/utils/findUser"
import { NextResponse } from "next/server"

export async function PATCH(req){
    const {email}=await req.json()
    const user= await findUser(email)

    user.credit=user.credit-10
    await user.save()
    return NextResponse.json({msg:"credit updated"})

}