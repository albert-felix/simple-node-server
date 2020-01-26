const http = require("http");
const getQueryString = require("./getQueryString");

http
    .createServer((req,res) =>{
    res.writeHead(200,{"Content-Type": "application/json"}); //Mime type
    const queryObject = getQueryString(req.url);
    res.write(JSON.stringify(queryObject));
    res.end();
})
.listen(8080);