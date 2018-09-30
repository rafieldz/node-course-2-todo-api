// MongoClient v.2
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connect to MongoDB Server Successfull');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5bae00f0466f6b4231e114c4")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5bae9679466f6b4231e11790")
  }, {
    $set: {
      name: 'Rafael'
    },
      $inc: {
        age: 1
      }
  }).then((result) => {
    console.log(result);
  })
  // db.close();
});
