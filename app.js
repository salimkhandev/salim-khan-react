const express = require('express');
const indexRoute = require('./routes/index')
const userRoute = require('./routes/users')
const Joi = require("joi");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.json());
app.use('/',indexRoute)
app.use('/',userRoute)


app.listen(3000, () => {
   console.log(`Server is running on http://localhost:3000`);
});
