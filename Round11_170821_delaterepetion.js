/**
 * Created by 荼蘼 on 2017-08-22.
 */
//数组去重
//例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]

function delateArrrepetion(arr){
    var arrDaletere= new Array();
    for(var index in arr){
        if(arr.indexOf(arr[index]) == index){
            arrDaletere.push(arr[arr.indexOf(arr[index])]);
        }
    }
    console.log(arrDaletere);
}

delateArrrepetion(['s', 'a', 's', 'b', 'a',1,'1',1]);
