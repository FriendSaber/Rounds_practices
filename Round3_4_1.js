/**
 * Created by 荼蘼 on 2017-08-28.
 */
//将数组中所包含的某个元素找出，并放在数组后面
//给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
//
//    function XXX(arr,elem){ }
//
//参数：
//arr:数组
//elem:某个元素

function  laterElem( nums , target){

        nums.forEach((e) => {
        if(e === target){
            nums.splice(nums.indexOf(target),1);
            nums.push(target);
         }
        });

    console.log(nums);
}

laterElem([0, 1, 0, 3, 12], 0);
laterElem([0, 1, 0, 3, 12], 1);
laterElem([0, 1, 0, 3, 12], 3);
laterElem([0, 1,0, 3, 12], 12);
