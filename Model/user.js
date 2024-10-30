import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    email: String,
    credit:{
        type: Number,
        default:60
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);