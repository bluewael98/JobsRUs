import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.set('Cross-Origin-Embedder-Policy', 'require-corp');
  res.set('Cross-Origin-Resource-Policy', 'same-origin');
  next();
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'connect-src': ["'self'", 'https://api.app.outscraper.com', 'https://lh3.googleusercontent.com',],
      'img-src': ["'self'", 'https:', 'data:'],
      'form-action': ["'self'", "https://formsubmit.co"],
    },
  })
);
app.use(morgan('common'));

const port = process.env.PORT || 5000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'same-origin',
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});