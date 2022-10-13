var MyClass = /** @class */ (function () {
    function MyClass(name) {
    }
    MyClass.prototype.setValue = function (name) {
        this.name = name;
    };
    MyClass.prototype.getValue = function () {
        return this.name;
    };
    return MyClass;
}());
var value = new MyClass("nazmul");
value.setValue("nazmul");
console.log(value.getValue());
