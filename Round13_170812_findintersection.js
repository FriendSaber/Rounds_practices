/**
 * Created by 荼蘼 on 2017-08-22.
 */
//计算两个数组的交数组
//
//注意：理解题意（不是找出在两数组中都存在的元素）
//例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].

function findIntersec(nums1,nums2){
    var arr= [];
    for(var i=0;i<nums1.length;i++){
        for(var j=0;j<nums2.length;j++){
            if(nums1[i] === nums2[j]){
                   arr.push(nums2[j]) ;
                nums2.splice(j,1);
                break;
            }
        }
    }
    console.log(arr);

}

findIntersec([1, 2, 2, 1],[2, 2]);
findIntersec([1, 2,3,4],[3,4,5,6]);
