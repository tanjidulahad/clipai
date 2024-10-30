import User from "@/Model/user"

export const findUser=async(email)=>{
    const user=await User.findOne({"email":email})
    
    return user ? user : ""
}