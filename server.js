const { HOST , PORT , NODE_ENV } = require('./config'),
    express = require('express'),
    app = express();

console.log(`NODE_ENV=${NODE_ENV}`);

app.get('/', (req , res) => {
    res.send( 'Hello world' )
})

app.listen( PORT, HOST , () => {
    console.log(`App listen on http://${HOST}:${PORT}`);
})