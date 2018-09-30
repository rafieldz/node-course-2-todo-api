let mongoose = require('mongoose');
// User
// email - required it - trim it - set type - set min lenght of 1

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};
