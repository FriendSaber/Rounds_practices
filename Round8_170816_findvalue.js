/**
 * Created by 荼蘼 on 2017-08-16.
 */
//题目：找出数组 arr 中重复出现过的元素
//例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’

function  findValue(arr){
    for(var i=0;i<arr.length;i++){
        var flag = 0;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                flag = 1;
                break;
            }
        }
        if(flag === 1){
            console.log(": "+arr[i]);
        }
    }
}
findValue(['a', 'ab', 'ed', 'da', 'a','ed','b']);
console.log("---------------------------");
findValue(['a', 'ab', 'aed', 'da', 'a','aed','b','ade']);