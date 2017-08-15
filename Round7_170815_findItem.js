/**
 * Created by 荼蘼 on 2017-08-15.
 */
//题目：统计数组 arr 中值等于 item 的元素出现的次数
//例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
//要求：不要使用for循环
function findItem(arr,item){
    //var i=0;
    var count=0;
    //1.------------------while
    //while (i<arr.length){
    //    if(arr[i]===item){
    //        count++;
    //    }
    //    i++;
    //}
    //2.-----------------------------forEach()
    //arr.forEach(function(e){
    //    if(e===item){
    //        count++;
    //    }
    //});
    //2-1.------------------forEach()=>用法
    arr.forEach(e => {
        if(e===item)
    count++;
    });
    //3.--------------for...in
    //for(let index in arr){
    //    if(arr[index]===item){
    //        count++;
    //    }
    //}
    //4.--------------for...of
    //for(let index of arr){
    //    if(index===item){//此处用arr[index]的输出结果竟然是1,1；直接用index可以输出正确答案，所以实际上index===arr[index]
    //        count++;
    //    }
    //}
    //for(let i=0,len =arr.length;i<len;i++){
    //    if(arr[i]===item){
    //                count++;
    //            }
    //}


    console.log("count = "+count);
}
findItem([1,3,7,1,4],1);
findItem([7,1,3,7,1,4,7],7);