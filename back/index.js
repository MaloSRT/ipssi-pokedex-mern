import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(3000, function() {
    console.log('http://localhost:3000/');
});