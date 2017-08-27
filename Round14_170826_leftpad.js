/**
 * Created by 荼蘼 on 2017-08-26.
 */
//实现一个left-pad函数
//leftpad功能，就是字符串前面拼指定字符到固定长度，比如
//leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
//三个参数，
//第一个：当前字符串；
//第二个：需要返回字符串的长度
//第三个：用来拼接的字符串

function leftpad(str,len,ch){//pre_str,last_str
    var string ='';
    if (!ch && ch !== 0) ch = ' ';
    for(var i=0;i<len - str.length;i++){
        string += ch;
    }
    string += str;
    return string;
}

//console.time("执行时间");
var  result1 = '';
var  result1 = leftpad('hello',20,'1');
console.log(result1);

var  result2 = '';
var  result2 = leftpad('hello',3,'1');
console.log(result2);

//console.timeEnd("执行时间");