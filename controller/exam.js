import express from 'express';
import {Questions} from '../database/models/index.js';

const router = express.Router()

router.get('/', async function (req, res, next) {

    try {
        let questions = await Questions.findAll({})

        return res.status(200).send({questions, message: 'success'});
    } catch (e) {
        return res.status(400).send({error: e});
    }

})

export default router