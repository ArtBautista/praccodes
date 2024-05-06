import Admin from "@/utils/models/auth";
import { connect } from "@/utils/config/dbConfig";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    const savedAdmin = await newAdmin.save();

    return NextResponse.json({
      message: "Admin created successfully",
      success: true,
      newAdmin,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
}
