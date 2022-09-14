enum statusCode {
    not_found = 404,
    success = "200"
}

console.log(statusCode.not_found);

//Alias

 type myname = string;
 type myage = number;

const age:myage = 23;
const name:myname = "nazmul"

type carType = {
    name:myname, yarn:myage
}

const car:carType = {
    name: "name",
    yarn: 3
}