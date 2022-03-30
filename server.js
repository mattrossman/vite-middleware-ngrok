const express = require("express")
const { createServer: createViteServer } = require("vite")

const PORT = process.env.PORT || 3000

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: "html" },
  })

  app.use(vite.middlewares)

  app.listen(PORT, async () => {
    console.log(`listening on http://localhost:${PORT}`)
  })
}

createServer()
