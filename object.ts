const obj:{name:string, lname: string} = {
    name: "nazmul",
    lname: "hasan"
}
console.log(obj);

let myObj = {
    age: 23,
    home: "comilla"
};
myObj.age = "string"

//index signature 
let anotherObj:{[index:string]:number} = {
}
anotherObj.nazmul = "string"

//optional property
let myObject: {name:string, lanme?:string} = {
    name: "hasan"
};
myObject.lanme = "nazmul";