//What is scope and lexical environemnt.
// what is scope chaining.


function fun(){

    fun2();

    function fun2(){
        console.log(hii);
    }
}

var hii = 10;
fun();
console.log(hii);

// the output of this function would be 10 10 because the inneer fucntion is lexically bound tou outer functions.