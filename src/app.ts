import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.send('Node is Best!');
});

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});