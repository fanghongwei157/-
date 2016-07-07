/**
 * Created by sks on 2016-07-07.
 */
(function () {
    var xhr,form,result;
    
    function init() {
        xhr=new XMLHttpRequest();

        getElements();
        addListeners();
    }
    
    function getElements() {
        form=document.querySelector("#form");
        username=document.querySelector("#username");
        password=document.querySelector("#password");
        result=document.querySelector("#result");
    }
    
    function addListeners() {
        form.onsubmit=function (event) {
            event.preventDefault();

            //connectServer(username.value,password.value);
            connectServer({Username:username.value,
                Password:password.value});
        }
    }
    
    function connectServer(data) {
        
        xhr.onload = function () {

            result.innerHTML =  xhr.responseText;

        };

        var paramsStr = "";
        for (var key in data) {
            paramsStr += key + "=" + data[key] + "&";
        }
        
        xhr.open("post", "/login");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(paramsStr);
    }
    
    init();
    
})();