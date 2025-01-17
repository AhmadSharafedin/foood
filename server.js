const express= require("express");
const axios = require("axios");
const bodyParser = require('body-parser')
const cors = require("cors");
const mongo = require ("./database")
///////////

const app = express();
app.use(express.json());
app.use(cors());


app.use("/user", require("./express-food/user"));
app.use("/post", require("./express-food/post"));



app.get('/', (req, res) => {
  res.json('server is working');
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
