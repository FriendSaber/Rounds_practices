/**
 * Created by 荼蘼 on 2017-08-12.
 */
function Narcissus(){
    console.log("水仙花数：")
    for(var i=100;i<1000;i++){
        var bai=Math.floor(i/100);
        var shi=Math.floor((i-bai*100)/10);
        var ge=i%10;

        //if(i===153){
        //    console.log(bai+" "+shi+" "+ge);
        //}

        if(i===(bai*bai*bai+shi*shi*shi+ge*ge*ge)){
            console.log(i+" ");
        }
    }
}

Narcissus();