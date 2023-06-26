const express = require('express');
const PORT = 8000;
const app = express();
const cors = require('cors');
const router = require('./router');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

app.timeout = 300000;

dotenv.config();


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch((err) => console.log(err));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));