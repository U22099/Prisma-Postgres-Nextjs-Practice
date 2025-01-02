import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function deleteUser(id) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id.id,
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
    return NextResponse.json({ msg: "Success"}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error"}, { status: 500});
  }
}