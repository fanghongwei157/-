/**
 * Created by sks on 2016/6/27.
 */

(function(){

    function Main(){

        this._context2d=document.getElementById("canvas").getContext("2d");

        //动态创建了video
        this._video=document.createElement("video");

        this._video.autoplay=true;

        this._video.src="toutu1.mp4";
        //this._video.src="雷洋.qsv";

        this.write();
    }


    Main.prototype.write=function(){

        this._context2d.drawImage(this._video,0,0,600,400);

        var originImageDate=this._context2d.getImageData(0,0,600,400);

        //black and white image data
        var blackAndWhiteImageDate=this._context2d.createImageData(600,400);

        for(i=0;i<originImageDate.data.length;i+=4){
            var color=(originImageDate.data[i]+originImageDate.data[i+1]+originImageDate.data[i+2])/3;

            blackAndWhiteImageDate.data[i]=color;
            blackAndWhiteImageDate.data[i+1]=color;
            blackAndWhiteImageDate.data[i+2]=color;
            blackAndWhiteImageDate.data[i+3]=255;
        }
        this._context2d.putImageData(blackAndWhiteImageDate,650,0);

        requestAnimationFrame(this.write.bind(this));
    };




    new Main();
}());