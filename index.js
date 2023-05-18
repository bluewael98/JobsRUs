import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());


app.use(morgan('common'));

const port = process.env.PORT || 5000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' https://api.app.outscraper.com");
  next();
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
