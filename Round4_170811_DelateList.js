/**
 * Created by 荼蘼 on 2017-08-11.
 */
function DelateList(str,val){
    val= '->'+val;
    var reg =eval("/"+val+"/ig");
   str=str.replace(reg,"");
    console.log(str);
}
function  LinkedList(){
    let Node = function(ele){
        this.ele = ele;
        this.next=null;
    },length= 0,head = null;
    this.append = function(ele){
        var node =new Node(ele),
            current;
        if(head=== null){
            head =node;
        }else{
            current =head;
            while(current.next){
                current=current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.print = function () {
        var current = head, //{1}
            string = '';    //{2}

        while (current) {   //{3}
            string += current.ele+'->'; //{4}
            current = current.next;   //{5}
        }
        //string=string.substr(0,string.length-1);
        string=string.substr(0,string.length-2);//截取最后两个
        //string=string.ToString().RTrim('->');
        return string;                //{6}
    };

}
let LinkedList1= new LinkedList();
[1,2,3,3,4,5,3].forEach(function (value) {
    LinkedList1.append(value)
})
console.log("原链表："+LinkedList1.print()); //123456

DelateList(LinkedList1.print(),'3');