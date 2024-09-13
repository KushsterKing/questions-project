import express from 'express';
import bodyParser from 'body-parser';

import {examRouter, questionRouter} from './controller/index.js';

const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/question', questionRouter);
app.use('/exam', examRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})