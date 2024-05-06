import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Fullname is requried"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is requried"],
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.admin || mongoose.model("admin", adminSchema);
