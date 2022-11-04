
// arr[1] = 10;
// console.log(arr);
function swap(arr,idx,minVal){
    let temp = arr[idx];
    arr[idx] = arr[minVal];
    arr[minVal] = temp;
   
}
let arr = [1,32,4,0,2,3,4,32];
let min = 0;
let i = 1;
while(i < arr.length){
    if(arr[i] < arr[min])
    swap(arr, i , min);
    i++;
    min = i;
  

}
