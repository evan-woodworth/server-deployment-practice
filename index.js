'use strict';

const app = require('./app.js');

// for deployment, we need to let heoku set the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App is running on port ', port);
});