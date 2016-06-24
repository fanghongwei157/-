/**
 * Created by sks on 2016-06-21.
 */
(function () {
    Object.defineProperties(HTMLElement.prototype, {
        useCustomContextMenu: {
            get: function () {
                return this._useCustomContexMenu;//下划线是自定义的  表示私有属性 也可以改为自己习惯的
                //没有执行set方法的时候，直接执行get方法  返回值是  undefined 作为波尔值 是false 系统执行默认
            },
            set: function (value) {
                this._useCustomContextMenu = value;
                if (this._useCustomContextMenu) {
                    this.oncontextmenu = function (event) {
                        event.preventDefault();
                     //   event.stopPropagation();
                        
                        if (this.customContextMenu){
                            this.customContextMenu.showMenu(event.clientX,event.clientY);
                        }
                    }.bind(this);
                }
                else {
                    this.oncontextmenu = null;
                }
            }
        },
        customContextMenu:{
            get:function () {
                return this._customContextMenu;
            },
            set:function (value) {
                if(this._customContextMenu){
                    document.body.removeChild(this._customContextMenu);
                }
                
                this._customContextMenu=value;
               
                if (this._customContextMenu){
                    document.body.appendChild(this._customContextMenu.node);
                    this._customContextMenu.hide();
                }
            }
        }
     
    });

})();//写闭包一定要记得执行！