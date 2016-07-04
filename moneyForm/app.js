/**
 * Created by sks on 2016-07-04.
 */
(function () {
    window.Config = {DB_NAME: "MyDB", DB_VERSION: 1};
    function Main() {
        this._usersContainer = document.getElementById("userscontainer");
        this._form = document.getElementById("form");
        this._msgDiv = document.getElementById("msg");
        this._btnDeleteDb=document.getElementById("deleateButton");
     

        this.connectDB(function () {
            this.readData();
        }.bind(this));
        this.addListeners();

    }

    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);
        req.onsuccess = function () {
            this._db = req.result;
            console.log("连接数据库成功");
            if (sucCallback) {
                sucCallback();
            }
        }.bind(this);
        req.onerror = function (event) {
            console.error(event);
        };
        req.onupgradeneeded = function (event) {
            var db = req.result;
            var os = db.createObjectStore("users", {keyPath: "ID", autoIncrement: true});
            os.createIndex("name", "name");
            os.createIndex("date", "date");
            os.createIndex("num", "num");
            os.createIndex("YoN", "YoN");
        }
    };
    Main.prototype.addListeners = function () {

        this._btnDeleteDb.onclick = function () {
            var req = indexedDB.deleteDatabase(Config.DB_NAME);
            req.onerror = function () {
                this._msgDiv.innerHTML = "删除数据库失败";
            }.bind(this);
            req.onsuccess = function () {
                this._msgDiv.innerHTML = "删除数据库成功";
            }.bind(this);
            window.location.reload();
        }.bind(this);

        this._form.onsubmit = function (event) {
            var trans = this._db.transaction("users", "readwrite");
            var os = trans.objectStore("users");
            var req = os.put({
                name: this._form["name"].value,
                date: this._form["date"].value,
                num: this._form["num"].value,
                YoN: this._form["YoN"].value
            });
           /* this._f5.onclick=function () {

                window.location.reload();
            }.bind(this);*/


            req.onerror = function () {
                this._msgDiv.innerHTML = "保存数据失败";
            }.bind(this);
            req.onsuccess = function () {
                this._msgDiv.innerHTML = "保存数据成功";
                this._form["name"].value = "";
                this._form["date"].value = "";
                this._form["num"].value = "";
                this._form["YoN"].value = "";
            }.bind(this);
            window.location.reload();
            event.preventDefault();
        }.bind(this);


    };

    Main.prototype.readData = function () {
        var trans = this._db.transaction("users");
        var os = trans.objectStore("users");
        var req = os.getAll();
        req.onsuccess = function (event) {
            this._usersContainer.innerHTML = this.createTableHTMLByData(event.target.result);
        }.bind(this);
        req.onerror = function () {
            this._msgDiv.innerHTML = "获取数据失败";
        }.bind(this);
    };

    Main.prototype.createTableHTMLByData = function (data) {
        var html = "<table border='1' cellspacing='0'><tr><th>姓名</th><th>日期</th><th>欠款数额</th><th>是否还清</th></tr>";
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            html += "<tr><td>" + item.name + "</td><td>" + item.date + "</td><td>" + item.num + "</td><td>" + item.YoN + "</td></tr>";
        }
        html += "</table>";
        return html;
    };
    new Main();
})();
