const mongoose = require('mongoose');

// connecting into database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};
