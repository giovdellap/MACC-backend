var express = require('express');
const cors = require('cors');
const https = require("https");
const fs = require("fs");
const path = require("path");

const queryRouter = require('./routes/r_query.js');
// const insertionRouter = require("./routes/r_insertion")

const app = express();

app.use(express.json())
app.use(express.urlencoded())
const PORT = 5001;

app.use(cors())
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/macc', queryRouter);

const options = {
  key: fs.readFileSync(path.join(__dirname, "localhost-key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "localhost.pem")),
};
  
  // Create HTTPS server
//const server = https.createServer(options, app);

app.listen(PORT, () => {
    console.log(`App listening on https://localhost:${PORT}`);
  });

