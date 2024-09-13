import sequelize from "../sequelize.js";
import Questions from "./questions.js"

sequelize.sync()
    .then(async () => {
        // Insert new row using `create()` method
        console.log('Successfully created the question table!')
    })
    .catch((error) => console.log('Failed to synchronize with the database:', error))

export {Questions};

// export default db;

