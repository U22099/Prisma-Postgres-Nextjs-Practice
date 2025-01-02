import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function readUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    console.log(err);
  }
}

export const GET = async () => {
  try {
    const users = await readUser();
    return NextResponse.json({ status: 200 }, { users });
  } catch (err) {
    return NextResponse.json({ status: 500 }, { msg: "Error" });
  }
}