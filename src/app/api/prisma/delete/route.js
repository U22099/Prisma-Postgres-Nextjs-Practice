import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function deleteUser(id) {
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      }
    });
    console.log(id);
  } catch (err) {
    console.log(err)
    throw Error(err.message);
  }
}

export const POST = async (req) => {
  try {
    const { id } = await req.json();
    await deleteUser(id);
    return NextResponse.json({ status: 200 }, { msg: "Success " });
  } catch (err) {
    return NextResponse.json({ status: 500 }, { msg: "Error" });
  }
}