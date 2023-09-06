import { Elysia } from "elysia";

const app = new Elysia()
.get("/", () => Bun.file('index.html'))
.get("/messages", () => '<h1>Dude!</h1>')
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
