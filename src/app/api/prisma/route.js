import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });
  console.log(user);
}

export const GET = async () => {
  try{
    await createUser();
    NextResponse.json({ status: 200 }, { msg: "Success "});
  } catch (err) {
    NextResponse.json({ status: 500}, { msg: "Error"});
  }
}