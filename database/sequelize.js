import { Sequelize, DataTypes } from 'sequelize';
import configuration from './../configuration.js';

const sequelize = new Sequelize(configuration.database,
    configuration.username,
    configuration.password, {
        host: configuration.host,
        dialect: 'mysql'
    });

sequelize.authenticate()
    .then(() => console.log('Successfully connected to the database!'))
    .catch((error) => console.log('Failed to connect the database:', error))

export default sequelize