import { Elysia } from "elysia";
import { html } from '@elysiajs/html'

const app = new Elysia()
.use(html())
.get("/", () => Bun.file('index.html'))
.get("/messages", ({html}) => html('<h1>Dude!</h1>'))
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
