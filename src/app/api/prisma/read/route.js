import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function readUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    console.log(err)
    throw Error(err.message);
  }
}

export const GET = async () => {
  try {
    const users = await readUsers();
    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }
}