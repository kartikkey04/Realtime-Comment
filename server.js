const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log(`Server is listening at Port ${PORT}`);
})