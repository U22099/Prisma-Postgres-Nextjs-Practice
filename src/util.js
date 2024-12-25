export async function createUser(){
  try{
    const res = await fetch("/api/prisma");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message)
  } 
}