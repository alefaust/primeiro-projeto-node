import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) => {
    return response.json({ mensage : "Hello World teste!"});
});

app.listen(3333,() => {
    console.log("🎈 Server port listen 3333!");
});
