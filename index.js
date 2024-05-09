// object literals
const myObject = {
    name: "Bhaanoo Vishwakarma",
    age: 30,
    email: "bhaanoo@email.com",
    education: "Btech ME"
}   // This is object literals
// const myString = '' || "" || ``   // This is String literals

// const myBoolean = true / false    // This can also be written 
// const myBoolean1 = new Boolean(true)

// in this fash we can write all object

// how to create new Object
// iterating over object we can do it by using dot notation or by bracket notation

// also we can delete an property from an object using
// delete myObject.proprtyName  // this will delete proprtyName

for (let key in myObject) {
    console.log(key);
}



delete myObject.age;

if ("age" in myObject) {
    console.log("Hello Age is in myObject");
} else {
    console.log("no age is present anymore");
}