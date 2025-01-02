"use client";

import { createUser, readUsers, updateUser, deleteUser } from "@/util";
import { useState } from "react";

export default function Home() {
  const createTypeArray = [
    "id","name", "gender"
  ]
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [createState, setCreateState] = useState();
  const [readState, setReadState] = useState();
  return (
    <main className="flex flex-col justify-start items-start gap-4 h-full w-full dark:bg-black">
      {/*Create Section*/}
      <section className="flex flex-col gap-2 w-full">
        <h1 className="font-bold dark:text-white text-lg">Create User</h1>
        {createTypeArray.map((x, i) => <Inputs key={i} type={x} action={(e) => {
          if(e.target.value){
            type === "id" ? setID(e.target.value) : type === "name" ? setName(e.target.value) : setGender(e.target.value)
          }
        }}/>)}
        {createState&&<p className={createState.error ? "text-red-600" : "text-green-600"}>{createState.msg}</p>}
        <button onClick={async () => await createUser({
          id, name, gender
        }, setCreateState)} className="bg-black dark:bg-white py-3 w-full mx-3 rounded shadow-xl">Create New User</button>
      </section>
      { /*Read Section*/ }
      <section className="flex flex-col gap-2 w-full">
        <h1 className="font-bold dark:text-white text-lg">Read Users</h1>
        <section className="flex flex-wrap gap-2">
          {readState.data&&readState.data.map((x, i) => <div className="border p-2 rounded flex flex-col gap-2 w-fit h-fig" key={i}>
            <p className="font-bold text-sm dark:text-white">Id: {x.id}</p>
            <p className="font-bold text-sm dark:text-white">Name: {x.name}</p>
            <p className="font-bold text-sm dark:text-white">Gender: {x.gender}</p>
          </div>)}
        </section>
        {readState&&<p className={readState.error ? "text-red-600" : "text-green-600"}>{readState.msg}</p>}
        <button onClick={async () => await readUsers(setReadState)} className="bg-black dark:bg-white py-3 w-full mx-3 rounded shadow-xl">Read All User</button>
      </section>
    </main>
  );
}

function Inputs({ type, action }) {
  return (
    <div className="flex gap-2">
      <label className="dark:text-white" htmlFor={type}>{type.toUpperCase()}:</label>
      <input className="bg-none backdrop-blur-sm border p-2 rounded text-md font-bold w-20 h-9 dark:text-white" type="text" placeholder={type} id={type} onChange={action}/>
    </div>
  )
}