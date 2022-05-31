const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());


app.get('/', (req, res) => {
    const {tracking} = req.query;
})

app.listen(PORT, () =>{
    console.log(`Example app listening on PORT ${PORT}!`)
})

