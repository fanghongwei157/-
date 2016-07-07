/**
 * Created by sks on 2016-07-06.
 */
(function () {
    function Main() {
        this.turnLeftRight();
        this.turnUpDown();
    }
   
    Main.prototype.turnLeftRight=function () {

        $("#card2").click(function () {
            $(this).LRSlideCard("#card1");
        });
        $("#card1").click(function () {
            $(this).LRSlideCard("#card2");
        });
    };

    Main.prototype.turnUpDown=function () {

        $("#card4").click(function () {
            $(this).UDSlideCard("#card3");
        });
        $("#card3").click(function () {
            $(this).UDSlideCard("#card4");
        });
    };
    new Main();
})();