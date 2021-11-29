const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());

app.get("/", (req, res) =>  res.json({ message: "Welcome to apps application." }));

app.post("/data",  (req, res) => {
    let data =  req.body;
    axios.post('http://localhost:5000/tasks/', {
        data: data,
        headers: {
            'Content-Type': 'application/json'
            }
    }).then(data => {
        console.log(`statusCode: ${data.status}`)
        res.send(data.data);
    })
    .catch(error => {
        res.send(error.message)
    })
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});