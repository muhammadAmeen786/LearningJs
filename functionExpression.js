//What is a function expression.
/* It is simply a function assigned to a variable .  
Now this variable can be passed like other normal variables, and hence we can manipulate our code easily.

*/
//example 
let sum = function(){//Here we don't specify the function name of the function like noraml
    // we can but it will throw an error if we will call the function by that name.

    let a = 10;
    let b = 20;
    console.log(a+b);

}
sum(); // will print the summed values.
console.log(sum); // this will print [funciton: sum]