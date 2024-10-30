import User from "@/Model/user"

export const checkUserExist=async(email)=>{
    const user=await User.find({email})
    
    return user.length > 0 ? user : false
}