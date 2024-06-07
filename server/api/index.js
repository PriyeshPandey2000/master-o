const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gameRoutes = require('../routes/game');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://master-o-client.vercel.app'  
}

));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to the root path!');
});
app.use('/api/game', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;