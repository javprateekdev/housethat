const express = require("express");
const con = require("./config");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get("/data", (req, resp) => {
  con.query("select * from project", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});



const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`Server is running succesfully on PORT ${PORT}`))
