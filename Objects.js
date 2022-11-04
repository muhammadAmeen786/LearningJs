// Now we are going to learn objects.
/* 
An Object is the key value pair style of saving the data , in javascript pretty much everything is an object 
we can store key value pairs like given below.
*/
let obj1 = {
    key1  : "value1",
    key2 : "value2",
    key3 :"value3",
}
console.log(obj1.length); // this is only valid for arrays. That is what separates arrays from objects.
console.log(obj1.key1); // value1
console.log(obj1["key2"]); // value2
console.log(obj1.hasOwnProperty("key1")) // this will return true.
///we can set the value of  an object like this.

obj1.Hello = "hii brothers and sisters.";
console.warn(obj1); // this will print all the properties including the one we just added.

obj1["hey"] = "hey this is the new property."; // this will also  add the property.
console.warn(obj1); 