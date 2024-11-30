import { NextResponse } from "next/server";

export const GET = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const id = Math.floor(Math.random() * 100 + 1);
    arr.push({
      id,
      message: `Todo message ${id}`,
    });
  }
  return NextResponse.json({
    todos: arr,
  });
};
