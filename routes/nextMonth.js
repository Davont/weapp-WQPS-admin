var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var next_month = require("../schemas/nextMonth"); // 引入模型
mongoose.connect("mongodb://water:water@127.0.0.1:27017/next_month", {
  useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected success.");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB connected fail.");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connected disconnected.");
});

router.get("/get_nextMonth_list", function(req, res, next) {
  //res.send("username" + username1);
  next_month.list.find(function(err, ress) {
    console.log(123);
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
  });
});
router.get("/get_ph", function(req, res, next) {
  //res.send("username" + username1);
  next_month.ph.find(function(err, ress) {
    console.log(123);
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
  });
});
router.get("/get_aNit", function(req, res, next) {
  //res.send("username" + username1);
  next_month.ammonia_nitrogen.find(function(err, ress) {
    console.log(123);
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
  });
});
router.get("/get_dOxy", function(req, res, next) {
  //res.send("username" + username1);
  next_month.dissolved_oxygen.find(function(err, ress) {
    console.log(123);
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
  });
});
router.post("/add_ph", function(req, res, next) {
  let month = req.query.month;
  let value = parseFloat(req.query.value);
  let newData = new next_month.ph({
    month: month,
    value: value
  });
  newData.save(function(err, ress) {
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
  });
});
router.post("/add_aNit", function(req, res, next) {
  let month = req.query.month;
  let value = parseFloat(req.query.value);
  let newData = new next_month.ammonia_nitrogen({
    month: month,
    value: value
  });
  newData.save(function(err, ress) {
    console.log(123);
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
  });
});
router.post("/add_dOxy", function(req, res, next) {
  let month = req.query.month;
  let value = parseFloat(req.query.value);
  let newData = new next_month.dissolved_oxygen({
    month: month,
    value: value
  });
  newData.save(function(err, ress) {
    console.log(123);
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
  });
});
router.post("/add_list", function(req, res, next) {
  let ph1 = parseFloat(req.query.ph);
  let d_oxy2 = parseFloat(req.query.d_oxy);
  let a_nit3 = parseFloat(req.query.a_nit);
  let newData = new next_month.list({
    ph: ph1,
    d_oxy: d_oxy2,
    a_nit: a_nit3
  });
  newData.save(function(err, ress) {
    console.log(123);
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
  });
});
module.exports = router;
