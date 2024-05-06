import Student from "@/utils/models/user";
import { connect } from "@/utils/config/dbConfig";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { stderr } from "process";

connect();

//GET all
export async function GET() {
  const students = await Student.find();
  return NextResponse.json({ students });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await Student.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
