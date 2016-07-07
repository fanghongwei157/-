/**
 * Created by sks on 2016-07-06.
 */
(function () {
    
    $.fn.LRSlideCard=function (another) {

           $(this).animate({"width":"0","margin-left":"200px"},1000,function () {
               $(another).animate({"width":"400px","margin-left":"0"},1000);
           })
    };
    
    $.fn.UDSlideCard=function (another) {

        $(this).animate({"height":"0","margin-top":"150px"},1000,function () {
            $(another).animate({"height":"300px","margin-top":"0"},1000);
        })
    };

})();