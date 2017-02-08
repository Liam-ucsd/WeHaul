/**
 * Created by Liam on 2/7/2017.
 */

//config
var express = require('express');



//initializing
var app = express();


//serving static content
app.use(express.static('./webapp'));

app.listen(process.env.PORT || 8080);

console.log("Now serving on port "+(process.env.PORT || 8080));