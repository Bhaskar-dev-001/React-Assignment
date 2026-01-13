import express from 'express';
import path from 'path';
import { createServer as CreateViteServer } from 'vite';
import fs from 'fs';
import { Script } from 'vm';


const __dirname = path.resolve();

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode.
  const vite = await CreateViteServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom',
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use(/.*/,async(req,res)=>{
    try {
        const url = req.originalUrl;
        
        // 1. Read index.html
        let template = fs.readFileSync(path.resolve(__dirname,'index.html'),'utf-8');

        
        template = await vite.transformIndexHtml(url,template);
const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
const { appHtml, InitialData } = await render(req.originalUrl);

const html = template
  .replace("<!--app-html-->", appHtml)
  .replace("<!--initial-data-->", `<script>window.__INITIAL_DATA__=${JSON.stringify(InitialData)}</script>`);


        res.status(200).set({'Content-Type':'text/html'}).end(html);
    } catch (e) {
        vite.ssrFixStacktrace(e);
        console.log(e.stack);
        res.status(500).end(e.stack);
    }
  });

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

createServer();