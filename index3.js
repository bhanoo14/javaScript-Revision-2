let obj = {
    name: "bhaano",
};

// Object.defineProperty(obj, 'sayHello', {
//     value: function() {
//         console.log("Hello Bhaano Bhaai");
//     },
//     enumerable: true, // If you want the property to appear during enumeration
//     configurable: false // If you want to change the property descriptor later
// });

let str = "Bhaanoo Vishwakarma"


Object.prototype.draw = function(){
    console.log("I am drawing Something");
};
console.log(obj.__proto__)
console.log(str.__proto__)

Object.defineProperty(obj, "baba", {
    value: function(){
        console.log("This is just Second trial");
    }, enumerable: true,
    configurable: true })


let prop = obj.hasOwnProperty("draw")
console.log(prop);

console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(str))