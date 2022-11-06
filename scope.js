//What is scope and lexical environemnt.
// what is scope chaining.


function fun(){

    fun2();

    function fun2(){
        
        console.log(hii); // jab ki iss function k pass koi variable nahee hai apna
                            // but ye still out put 10 hee dega because of scope chaining.
    }
}


fun();
let hii = 10;
console.log(hii);

// the output of this function would be 10 10 because the inneer fucntion is lexically bound tou outer functions.