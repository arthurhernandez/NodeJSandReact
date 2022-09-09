const port = 27550,
 http = require("http"),
 httpStatus = require("http-status-codes"),
 router = require("./router"),
 contentTypes = require("./contentTypes"),
 utils = require("./utils");

 router.get("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.html);
   utils.getFile("views/battleship.html", res);  
 }); 

 router.post("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.js);
   utils.getFile("public/js/battleship.js", res);
 });

 router.post("/", (req, res) => {
   res.writeHead(httpStatus.OK, contentTypes.css);
   utils.getFile("public/css/battleship.css", res);
 });
 

http.createServer(router.handle).listen(27550);
console.log(`The server is listening on port number:
➥ ${port}`);
