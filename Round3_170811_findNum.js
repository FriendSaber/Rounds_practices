/**
 * Created by 荼蘼 on 2017-08-11.
 */
function  findNum(arr){

   for(var i=0;i<arr.length;i++){
       var count=0;
       for(var j=0;j<arr.length;j++){
           if(arr[i]===arr[j]){
               count=count+1;
               if(count===2) {
                    break;
               }
           }
       }
       if(count===1){
           console.log("Result = "+ arr[i]);
       }

   }
}
var arr=[1,2,3,4,5,6,5,4,3,2,1];
findNum(arr);