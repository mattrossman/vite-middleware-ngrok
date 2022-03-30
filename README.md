# Steps to Reproduce

```bash
# Install dependencies
yarn

# Start an express server with Vite middleware
yarn middleware

# Start ngrok tunnel (in another terminal)
yarn tunnel
```

Then visit the generated \*.ngrok.io URL and open the browser console. The HMR client cannot connect even though `server.hmr.clientPort` is configured to 443 for HTTPS:

```
[vite] connecting...
```

As a result the page constantly reloads which inhibits development.

# Additional Context

```bash
# Start dev server with Vite CLI
yarn cli

# Start ngrok tunnel (in another terminal)
yarn tunnel
```

Here, HMR properly connects:

```
[vite] connecting...
[vite] connected.
```
