"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:5000/api/todos");
      const res = await response.json();
      setTodos(res.todos);
      console.log("client todos: ", res.todos);
      return res.todos;
    };
    getTodos();
  }, []);

  return todos.map((e: { id: number; message: string }) => (
    <div key={e.id}>{e.message}</div>
  ));
};

export default Page;
