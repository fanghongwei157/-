/**
 * Created by sks on 2016-06-25.
 */
(function () {

    function init() {

        $.get("config.ini").done(function (data) {
            var ini = new ucai.Ini(data);
            console.log(ini);
        });
    }

    init();
})();