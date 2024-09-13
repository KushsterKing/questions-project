
Install node - version 20+

Install mysql locally - version 8.0.38

Create a configuration file and save it like below:

```javascript 
const data = {
    database: 'question_db',
    username: 'root',
    password: 'root@12345',
    host: 'localhost',
}

export default data;
```

Change the username/password/database according
to your user credentials

Install dependencies - npm install

Run the project - npm start

POST /question - send body params as follows
(question, answers)

JSON (question should be a valid string and
answers a valid array with one or four array length)

```json 

{
    "question": "What is the full form of DDD?",
    "answers": [
      "Domain Driven Design",
      "Drive Driven Design",
      "Design Driven Domain!",
      "Double Driven Design"
    ]
}
```

GET /exam - get all the saved questions