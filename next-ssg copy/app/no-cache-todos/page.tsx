import React from "react";
import { RevalidateButton } from "./RevalidateButton";

async function getTodos() {
  const response = await fetch("http://localhost:5000/api/todos", {
    next: {
      tags: ["todos"],
    },
  });
  const res = await response.json();
  return res;
}
const Page = async () => {
  // Invalidate Cache

  const res = await getTodos();
  console.log("no cache component todos", res.todos);
  return (
    <div>
      <RevalidateButton />
      {res.todos.map((e: { id: number; message: string }) => (
        <div key={e.id}>{e.message}</div>
      ))}
    </div>
  );
};

export default Page;
