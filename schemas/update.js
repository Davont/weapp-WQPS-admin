var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var update_ph = new Schema({
    x: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    },
    y: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    }
});
var update_aNit = new Schema({
    x: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    },
    y: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    }
});
var update_dOxy = new Schema({
    x: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    },
    y: {
        type: [Number],
        validate: {
            validator: function (v) {
                let flag = false;
                if (v.length !== 0) {
                    flag = true;
                }
                return flag;
            },
            message: props => `${props.value} is none`
        },
    }
});
var update_ph = mongoose.model('update_ph', update_ph, 'update_ph');
var update_aNit = mongoose.model('update_aNit', update_aNit, 'update_aNit');
var update_dOxy = mongoose.model('update_dOxy', update_dOxy, 'update_dOxy');
exports.update_ph = update_ph;
exports.update_aNit = update_aNit;
exports.update_dOxy = update_dOxy;