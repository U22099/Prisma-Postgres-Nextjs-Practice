import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com'+Math.floor(Math.random()* 10),
    },
  });
  console.log(user);
}

export const GET = async () => {
  try{
    await createUser();
    return NextResponse.json({ status: 200 }, { msg: "Success "});
  } catch (err) {
    return NextResponse.json({ status: 500}, { msg: "Error"});
  }
}