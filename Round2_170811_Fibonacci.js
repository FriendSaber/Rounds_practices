/**
 * Created by 荼蘼 on 2017-08-11.
 */
function Fibonacci(num){
    var result;
   // console.log(0+','+1);
    var pre=0;
    var last=1;
    var str= 0+','+1;
    for(var i=3;i<=num;i++){
        result=pre+last;
        pre=last;
        last=result;
         str += ','+result;
    }
    console.log(str);
}
Fibonacci(10);