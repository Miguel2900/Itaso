require('dotenv').config({path: `${__dirname}/.env`});

const express =require('express');
const app = express();
const port = process.env.PORT || 3000;

const Router = require('./Routes/route');

app.use(express.json());

app.use(express.static('../Frontend'))
app.use(Router);

app.listen(port, () => {
    console.log('Server running on http://localhost:' + port);
});
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});
