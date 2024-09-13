import sequelize from "../sequelize.js";
import { Sequelize, DataTypes } from 'sequelize';

const Questions = sequelize.define('question', {
    question: DataTypes.STRING,
    answers: DataTypes.JSON,
    type: DataTypes.ENUM({
        values: ['descriptive', 'mcq']
    }),
})

export default Questions;