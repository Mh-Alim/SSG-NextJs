import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/api/todos", (req: Request, res: any) => {
  const arr: any = [];
  for (let i = 0; i < 10; i++) {
    const id = Math.floor(Math.random() * 100 + 1);
    arr.push({ id, message: `Todo message ${id}` });
  }
  return res.json({
    todos: arr,
  });
});

app.listen(5000, () => {
  console.log(`server is running on 5000`);
});
