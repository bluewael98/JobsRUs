import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import axios from 'axios';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('common'));

const port = process.env.PORT || 5000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const API_KEY = 'AIzaSyA-KRW4MlLYE3hXWgauOew4pk1ddujgTIk'

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/place/:placeId/reviews', async (req, res) => {
  const placeId = req.params.placeId;
  const url= `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const reviews = response.data.result.reviews;
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(5000).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
