// Now we will look at IIFE --> IIFE means immediately Invoked Function Expression.
// these functins come handy when we have to call a fucntion immediately and don't need that further 
// in the program.

let fun1 = (function(a,b){
    console.log(a+b);
})(45,24);//Immediately invoke karr diaa. This function will print the vaue as 69.

