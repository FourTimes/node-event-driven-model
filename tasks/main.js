const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(cors());
app.use(helmet());


app.get("/", (req, res) =>  res.json({ message: "Welcome to tasks application." }));

app.post("/tasks", (req, res) => {
    let data = req.body;
    res.send(data);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});