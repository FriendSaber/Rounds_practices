/**
 * Created by 荼蘼 on 2017-08-11.
 */
function Decfactor(num){
    for(var i=2;i<=num;i++){
        if(num%i===0||num===i){
            num=num/i;
            console.log(i+' num:'+num);
            i=1;
        }
    }
    console.log('\n');
}
Decfactor(90);
Decfactor(60);
Decfactor(25);
Decfactor(18);