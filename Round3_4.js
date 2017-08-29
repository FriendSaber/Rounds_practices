/**
 * Created by 荼蘼 on 2017-08-27.
 */
//给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
//如果这个数被3整除，打印fizz.
//    如果这个数被5整除，打印buzz.
//    如果这个数能同时被3和5整除，打印fizz buzz.

function outputString(number){
    for(var i=1;i<number;i++){
        var string = '';

        (i%3 === 0) && (string += 'fizz');
        (i%5 === 0) && (string += "buzz");
        console.log(i+"\t"+string);
    }
}

outputString(16);
