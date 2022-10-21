const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Welcome to our Express");
});

app.listen(3000,() => {
    console.log("Riunning on port 3000")
})