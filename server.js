const express = require("express")
const { createServer: createViteServer } = require("vite")
const { Server } = require("http")

const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()
  const server = new Server(app)

  const vite = await createViteServer({
    server: { middlewareMode: "html", hmr: { server } },
  })

  app.use(vite.middlewares)

  server.listen(PORT, async () => {
    console.log(`listening on http://localhost:${PORT}`)
  })
}

createServer()
