/**
 * Created by 荼蘼 on 2017-08-13.
 */
function findnum(arr){
    arr=arr.sort();
    console.log(arr.sort());
    arr.length%2===0? console.log("中位数："+(arr[arr.length/2-1]+arr[arr.length/2])/2):console.log("中位数："+arr[Math.floor(arr.length/2-1)+1]);
}
findnum([5,4,3,2,1]);
findnum([1,5,4,3,5,6]);
