class MyClass<T>{
    private name:T;
    constructor(name:T){
    }
    public setValue(name: T){
        this.name = name;
    }

    public getValue():T{
        return this.name;
    }
}

const value = new MyClass<String>("nazmul")
value.setValue("nazmul");
console.log(value.getValue());