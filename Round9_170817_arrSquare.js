/**
 * Created by 荼蘼 on 2017-08-17.
 */
//为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
//例如：arr = [5, 3, 7, 1]; 输出：[25, 9, 49, 1]
//要求：不要使用for，while循环

function  arrSquare(arr){
    var str= new Array();
    arr.forEach( e=> {str.push(e*e);});
    console.log(str);
}
arrSquare([5,3,7,1]);
arrSquare([-5,3,7,1,4 ,5, 8]);