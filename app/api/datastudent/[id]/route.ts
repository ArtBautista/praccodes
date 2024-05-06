import Student from "@/utils/models/user";
import { connect } from "@/utils/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { newName: name, newEmail: email } = await req.json();
  await Student.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({ message: "Student Updated" }, { status: 200 });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const topic = await Student.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
