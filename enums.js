var statusCode;
(function (statusCode) {
    statusCode[statusCode["not_found"] = 404] = "not_found";
    statusCode["success"] = "200";
})(statusCode || (statusCode = {}));
console.log(statusCode.not_found);
var age = 23;
var myname = 33;
console.log(myname);
