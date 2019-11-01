const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./network/routes');
const db = require('./db');

db('mongodb://localhost:27017/moc-mandado');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
routes(app);

app.listen(8000, ()=> console.log(`server up, listening on port 8000`));