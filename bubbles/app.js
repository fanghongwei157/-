/**
 * Created by sks on 2016-06-18.
 */
(function () {
    var a,b,c;
    function findDivs() {
        a=document.getElementById("a");
        b=document.getElementById("b");
        c=document.getElementById("c");
    }
    function addListeners() {
        /*a.addEventListener("click",function (event) {
            console.log("a clicked");
        });
        b.addEventListener("click",function (event) {
            console.log("b clicked");
           // event.stopPropagation();//阻止事件冒泡
            event.stopImmediatePropagation();//立即阻止事件冒泡
        });
        b.addEventListener("click",function (event) {
            console.log("b clicked 1");
        });

        c.addEventListener("click",function (event) {
            console.log("c clicked");
        });*/
        
        /*a.addEventListener("click",function (event) {
            console.log("捕获阶段 a clicked");

            //event.stopPropagation();//次操作可以屏蔽对象的响应事件
        },true);//增加一个true 从函数外部往里捕获，默认是false 从触发的事件内部往外冒泡
        b.addEventListener("click",function (event) {
            console.log("捕获阶段 b clicked");
        },true);
        c.addEventListener("click",function (event) {
            console.log("捕获阶段 c clicked");
        },true);
        a.addEventListener("click",function (event) {
            console.log("冒泡阶段 a clicked")
        });
        b.addEventListener("click",function (event) {
            console.log("冒泡阶段 b clicked")
        });
        c.addEventListener("click",function (event) {
            console.log("冒泡阶段 c clicked")
        });*/

        a.addEventListener("contextmenu",function (event) {
            console.log("将要呈现右键菜单");

           // event.preventDefault();//取消右键菜单,还可以用来做 自定义菜单；
            //取消事件的默认行为

        })
        
    }
    function init() {
        findDivs();
        addListeners();
    }
    init();
    
    
})();