import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'url';
import express from 'express';
import serveStatic from 'serve-static';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

export async function createServer() {
  const resolve = (p) => path.resolve(__dirname, p);
  app.use(await serveStatic(resolve('dist/client'), {
    index: false,
  }));
  app.use('*', async (req, res) => {
    const url = '/';
    const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8');
    const render = (await import('./dist/server/entry-server.js')).SSRRender;
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml);
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  });
  return { app };
}

createServer().then(({ app }) =>
  app.listen(3033, () => {
    console.log('http://localhost:3033');
  }),
);