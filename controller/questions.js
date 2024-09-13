import express from 'express';
import Joi from 'joi';
import {Questions} from '../database/models/index.js';

const router = express.Router()

router.post('/', async function (req, res, next) {

    try {
        const schema = Joi.object({
            question: Joi.string().required(),
            answers: Joi.array().items(Joi.string().required()).max(4).min(1).unique(),
        })

        const result = schema.validate(req.body)

        if(result.error?.details?.[0]?.message){
            return res.status(400).send({error: result.error?.details?.[0]?.message})
        }

        let type = '';

        if(req.body.answers.length === 4){
            type = 'mcq';
        } else if(req.body.answers.length === 1){
            type = 'descriptive';
        } else {
            return res.status(400).send({error: 'Answers must must be either 1 or 4'})
        }

        let savedQuestion = await Questions.findOne({where: {question: req.body.question.trim()}})

        if(savedQuestion){
            return res.status(400).send({error: 'The question is already saved in the database'})
        }

        let question = Questions.build({
            question: req.body.question.trim(),
            answers: req.body.answers.map(elm => elm.trim()),
            type
        })

        await question.save()

        return res.status(200).send({message: 'Question saved successfully.'});
    } catch (e) {
        return res.status(400).send({error: e});
    }
})

export default router