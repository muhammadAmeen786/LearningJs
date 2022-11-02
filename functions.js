//In javaScript functions are treated as first class citizens.
//May b this will help you in future.
// Functions can be returned from functions , they can be passed as arguments and received as paramters.
//That is how they are.
function fun(str, a, b){
    if(str === "add"){
       return function add(){
            console.log(a+b);
        }
    }
    if(str=='sub'){
       return  function sub(){
            if(a>b)
            console.log(a-b);
            else
            console.log(b-1)

        }
       
    }
}

let val1 = fun('add',5,6)
val1();
