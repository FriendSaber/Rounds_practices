/**
 * Created by 荼蘼 on 2017-08-22.
 */
//判断一个字符串中出现次数最多的字符，并统计次数
//例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
//例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}

function  findMaxch(str){
    var newstr = str.split("");
    newstr = newstr.sort();
     var count = newstr.lastIndexOf(newstr[0])-newstr.indexOf(newstr[0])+1;
     var arr =[{char:newstr[0],count:count}];
   for(var i=count;i<newstr.length;){
    //    var count = newstr.indexOf(newstr[i]) - newstr.lastIndexOf(newstr[i]);
    //    i = count+1;
    //    arr.push({char:newstr[i],count:count});
    //}

    //arr = arr.sort();
    //console.log(arr);


}
findMaxch('abcsbaddbizdbas');
//findMaxch('aaaaabbdbdbb');