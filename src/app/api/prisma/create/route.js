import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function createUser(data) {
  try{
    console.log(data);
    const user = await prisma.user.create({
      data: { ...data }
    });
  } catch(err) {
    console.log(err);
  }
}

export const POST = async (req) => {
  try{
    const { data } = req.json();
    await createUser(data);
    return NextResponse.json({ status: 200 }, { msg: "Success"});
  } catch (err) {
    return NextResponse.json({ status: 500}, { msg: "Error"});
  }
}