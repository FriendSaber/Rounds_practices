/**
 * Created by 荼蘼 on 2017-08-28.
 */
//给定编码如下，给出一个整数,返回解码方法的种数；
//例如：
//给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
//1-> 'A’
//2-> ‘B’
//…
//26-> ‘Z’

function  decodeInt(number,arr){
    number = number.toString();
    console.log(number.length);
    var str = [];
    for(var i = 0;i<number.length;i++){
        str[i] = number;
        str[i] = str[i].substring(i,i+1);
        //console.log(str[i]);
    }
    str.push(number);
    console.log(str);

    for(var j=0;j<str.length;j++){
        if(str.lastIndexOf()>26 ||str.lastIndexOf()< 1){

        }
        console.log(parseInt(str[j])+arr[parseInt(str[j])]);
    }
}
var arr = [''];
for(var i = 65;i< 65+26;i++){
    arr.push(String.fromCharCode(i));
};

decodeInt(12,arr);
