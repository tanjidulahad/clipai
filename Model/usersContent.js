import mongoose from "mongoose";

const UserContent = mongoose.Schema(
  {
    email: String,
    title:String,
    description:String,
    content:String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.UserContent || mongoose.model("UserContent", UserContent);