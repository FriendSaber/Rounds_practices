/**
 * Created by 荼蘼 on 2017-08-15.
 */
//题目：统计数组 arr 中值等于 item 的元素出现的次数
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
//要求：不要使用for循环
function findItem(arr,item){
    var i=0;
    var count=0;
    while (i<arr.length){
        if(arr[i]===item){
            count++;
        }
        i++;
    }
    console.log("count = "+count);
}
findItem([1,3,7,1,4],1);
findItem([7,1,3,7,1,4,7],7);