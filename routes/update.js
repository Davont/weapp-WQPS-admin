var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var update = require("../schemas/update"); // 引入模型
mongoose.connect('mongodb://water:water@127.0.0.1:27017/next_month', {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected success.')
})

mongoose.connection.on('error', () => {
    console.log('MongoDB connected fail.')
})

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB connected disconnected.')
})

router.post("/update_ph", function (req, res, next) {
    let x = req.body.x;
    let y = req.body.y;
    let newData = new update.update_ph({
        x: x,
        y: y
    })
    newData.save(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
router.post("/update_aNit", function (req, res, next) {
    let x = req.body.x;
    let y = req.body.y;
    let newData = new update.update_aNit({
        x: x,
        y: y
    })
    newData.save(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
router.post("/update_dOxy", function (req, res, next) {
    let x = req.body.x;
    let y = req.body.y;
    let newData = new update.update_dOxy({
        x: x,
        y: y
    })
    newData.save(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
router.get("/get_ph", function (req, res, next) {
    update.update_ph.find(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
router.get("/get_aNit", function (req, res, next) {
    update.update_aNit.find(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
router.get("/get_dOxy", function (req, res, next) {
    update.update_dOxy.find(
        function (err, ress) {
            if (err) {
                console.log("error!");
                console.log(err);
                res.json({
                    code: 1,
                    msg: "error"
                });
            } else {
                console.log(ress);
                res.json({
                    code: 0,
                    msg: "success",
                    result: ress
                });
            }
        }
    );
});
module.exports = router;