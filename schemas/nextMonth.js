var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var next_month_list = new Schema({
    ph: Number,
    d_oxy: Number,
    a_nit: Number
});
var ph = new Schema({
    month: String,
    value: Number
});
var ammonia_nitrogen = new Schema({
    month: String,
    value: Number
});
var dissolved_oxygen = new Schema({
    month: String,
    value: Number
});

var list = mongoose.model('next_month_list', next_month_list, 'next_month_list');
var ph = mongoose.model('ph', ph, 'ph');
var ammonia_nitrogen = mongoose.model('ammonia_nitrogen', ammonia_nitrogen, 'ammonia_nitrogen');
var dissolved_oxygen = mongoose.model('dissolved_oxygen', dissolved_oxygen, 'dissolved_oxygen');

exports.list = list;
exports.ph = ph;
exports.ammonia_nitrogen = ammonia_nitrogen;
exports.dissolved_oxygen = dissolved_oxygen;