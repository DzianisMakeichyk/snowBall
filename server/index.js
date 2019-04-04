require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const next = require('next');
const { parse } = require('url');
const { join } = require('path');

const { PageMatchForRequest } = require('../lib/routes');
const config = require('./config');

const app = next({ dev: config.DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(helmet());

  // Helper function for throwing 404's from Next pages
  server.get('*', async (req, res, doNext) => {
    req.throw404 = function throw404() {
      const err = new Error();
      err.code = 'ENOENT';
      throw err;
    };
    doNext();
  });

  server.get('*', async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const pageMatch = await PageMatchForRequest(parsedUrl);
    if (pageMatch) {
      app.render(req, res, pageMatch, parsedUrl.query);
    } else if (parsedUrl.pathname === '/service-worker.js') {
      if (config.DEV) {
        res.status(404);
      } else {
        const filePath = join(__dirname, '..', '.next', parsedUrl.pathname);
        app.serveStatic(req, res, filePath);
      }
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(config.PORT, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${config.PORT}`); // eslint-disable-line
  });
});
