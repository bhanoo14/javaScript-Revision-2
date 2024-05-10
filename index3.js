let obj = {
    name: "bhaano",
};

Object.defineProperty(obj, 'sayHello', {
    value: function() {
        console.log("Hello Bhaano Bhaai");
    },
    enumerable: true, // If you want the property to appear during enumeration
    configurable: false // If you want to change the property descriptor later
});

console.log(Object.keys(obj))
Object.getPrototypeOf(obj)