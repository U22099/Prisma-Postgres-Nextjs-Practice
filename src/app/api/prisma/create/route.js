import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function createUser(data) {
  try{
    console.log(data);
    const user = await prisma.user.create({
      data: { ...data }
    });
  } catch(err) {
    console.log(err)
    throw Error(err.message);
  }
}

export const POST = async (req) => {
  try{
    const { data } = await req.json();
    await createUser(data);
    return NextResponse.json({ msg: "Success"}, { status: 200 });
  } catch (err) {
    return NextResponse.json({ msg: "Error"}, { status: 500});
  }
}