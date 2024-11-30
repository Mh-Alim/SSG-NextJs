import React from "react";

const page = async () => {
  const response = await fetch("http://localhost:5000/api/todos", {
    next: {
      revalidate: 10,
    },
  });

 
  const res = await response.json();

  console.log("server component todos", res.todos);
  return (
    <div>
      {res.todos.map((e: { id: number; message: string }) => (
        <div key={e.id}>{e.message}</div>
      ))}
    </div>
  );
};

export default page;
