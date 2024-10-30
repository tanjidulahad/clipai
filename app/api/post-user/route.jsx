import User from "@/Model/user"
import { checkUserExist } from "@/utils/checkUserExist"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { email } = await req.json()

    const isUserExist = await checkUserExist(email)

    if (!isUserExist) {
        const user = new User({
            email: email
        })

        await user.save()
        return NextResponse.json({ msg: "user saved successfully" })
    }else{
        return NextResponse.json({ msg: "user already exist" })
    }


}