import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
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

const courseSchema = new Schema({
  author: {
    type: String,
    required: [true, "Coruse"],
  },
  id: {
    type: String,
    required: [true, "Coruse"],
  },
  name: {
    type: String,
    required: [true, "Coruse"],
  },
  free: {
    type: String,
    required: [true, "Coruse"],
  },
  descriptio: {
    type: String,
    required: [true, "Coruse"],
  },
});
export default mongoose.models.user || mongoose.model("user", userSchema);
