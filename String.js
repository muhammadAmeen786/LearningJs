//Strings are the combination of characters. 
let str = "Hello  coders. We are here."
// the str is a string out here.
// Strings can be declared using backticks as well.
//Strings offer many methods which can be used 
// String slice method.
let str2 = str.slice(0,6);
let str3 = str.slice(7,12);
console.group(str2 + " " + str3);
//OutPut ... this will print Hello coder.

//strings are immutable in java. that means we can't do an assignment at any place of the string index.
// which means we can't do any like this. str[4] = i; 
//it will produce an error.

//there are a lot of methods which are used in strings.
str.push(3); //this will push an element at the end.
str.pop(); /// this will remove the last element from the string.
str.unshift() // this puts the element at the starting of the string.
str.shift() // It removes an element from the starting of an string.
str.slice(3,5) // this will trim the 3 to 5-1 index of the string and return that trimmed string.
str.substr(3,4) // this will start from the third index and count till 4 characters and then return those characters.
str.substring() // this also works the same like the substr.
str.indexOf(s)  // this will return the given index of the given character.
str.trim() // this method removes the leading and trailing spaces.
str.concat(str2) // this method will concatenate str and str2
str.includes('chr') // returns true or false.
str.lastIndexOf(chr) // returns the last index at which the index is present.

