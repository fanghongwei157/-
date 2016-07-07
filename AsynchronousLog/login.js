/**
 * Created by sks on 2016-07-07.
 */
var express = require('express');
var router = express.Router();

var users=[
    {name:"fang",pass:"123"},
    {name:"zhang",pass:"123"},
    {name:"wu",pass:"123"}
];


/* GET users listing. */
/*router.get('/', function (req, res, next) {
    res.send('Hello ' + req.query.name);
});*/

router.post('/', function (req, res, next) {
    switch (req.method) {
        case "GET":
            res.send( req.query.username);
            break;
        case "POST":
            var userFound=false;
            for(var i=0;i<users.length;i++){
                var item = users[i];

                if (item.name==req.body.Username) {
                    userFound=true;
                    if (item.pass == req.body.Password) {
                        res.send('Welcome: ' + req.body.Username);
                        break;
                    }else {
                        res.send("密码错误");
                    }
                }
            }
            if (!userFound){
                res.send('未注册账户');
            }
            break;
    }
});
module.exports = router;