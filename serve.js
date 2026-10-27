// Tiny static server for local preview: node serve.js
const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.mp4': 'video/mp4', '.png': 'image/png', '.jpg': 'image/jpeg' };
http.createServer((req, res) => {
  if (req.method === 'POST' && req.url.startsWith('/save?name=')) {
    const name = path.basename(decodeURIComponent(req.url.slice(11)));
    let body = ''; req.on('data', c => body += c);
    return req.on('end', () => { fs.writeFileSync(path.join(root, 'refs', name), Buffer.from(body.split(',')[1], 'base64')); res.end('ok'); });
  }
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(root, p);
  if (!f.startsWith(root) || !fs.existsSync(f)) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(5173, () => console.log('http://localhost:5173'));
