/**
 * Created by sks on 2016-06-22.
 */
/**
 * Created by Administrator on 2016/6/20.
 */


(function () {


    function Lrc(qq) {

        this.liric = qq;
        this.arry = this.liric.split(";");
        this.geci = new Array();
        this.shijian = new Array();
        this.audio = document.getElementById("audio");
        this.box = document.getElementById("box")
        setInterval(this.app.bind(this), 500);
    }

    Lrc.prototype.app = function () {
        for (var i = 0; i < this.arry.length; i++) {
            this.geci[i] = this.arry[i].substring(this.arry[i].lastIndexOf(']') + 1);
            this.shijian[i] = this.arry[i].substring(this.arry[i].indexOf('[') + 1, this.arry[i].lastIndexOf(']'));
            this.m =parseInt( this.shijian[i].substring(0, this.shijian[i].lastIndexOf(':')));
            this.s = parseInt(this.shijian[i].substring(this.shijian[i].indexOf(':') + 1));
            console.log((this.m * 60) + this.s);
            if ((this.m * 60) + this.s == parseInt(this.audio.currentTime)) {
                this.box.innerHTML = this.geci[i];
            }
        }


    };


    window.Lrc = Lrc;
})();