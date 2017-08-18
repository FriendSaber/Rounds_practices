/**
 * Created by 荼蘼 on 2017-08-18.
 */
//在数组 arr 中，查找值与 item 相等的元素出现的所有位置
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
//要求：不要使用for，while循环
function findItem(arr,item){
    var string='';
    for(var element in  arr){
        if(arr[element] ===item){string += element+",";}
    }
    console.log(string.substr(0,string.length-1));
}
findItem([1,3,7,1,4],1);
findItem([1,3,4,7,1,4,5,4],4);