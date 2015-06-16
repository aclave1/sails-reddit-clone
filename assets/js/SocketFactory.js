
var io = require('./sails.io');
module.exports = [function () {
    return io().socket;
}];
