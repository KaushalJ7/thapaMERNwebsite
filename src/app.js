const express = require("express");
require("../src/db/connection");
const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

// app.get("/", async (req,res) => {
//     res.send("Hello from The Veer")
// })

// We will handle post req


app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})
