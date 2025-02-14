import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function updateUser(data) {
  try {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data: { ...data }
    });
    console.log(data);
  } catch (err) {
    console.log(err)
    throw Error(err.message);
  }
}

export const POST = async (req) => {
  try {
    const { data } = await req.json();
    await updateUser(data);
    return NextResponse.json({ msg: "Success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error"}, { status: 500});
  }
}