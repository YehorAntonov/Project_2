const express = require('express');
const app = express();


app.use(express.static('dist'))

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
});
