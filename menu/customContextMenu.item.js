/**
 * Created by sks on 2016-06-21.
 */
window.ucai=window.ucai||{};
(function () {
    function CustomContextMenuItem(text,itemSelectedCallback) {
        this._itemSlectedCallback=itemSelectedCallback;
        
        this._li=document.createElement("li");
        
        this._a=document.createElement("a");
        this._li.appendChild(this._a);
        this._a.href="#";
        this._a.innerHTML=text;
        this._a.onclick=function (event) {
            if (this._itemSlectedCallback){
                this._itemSlectedCallback();
            }
        }.bind(this);
        
    }
    Object.defineProperty(CustomContextMenuItem.prototype,"node",{
       get:function () {
           return this._li;
       } //规定 外界只读不可写
    });
    ucai.CustomContextMenuItem=CustomContextMenuItem;
})();