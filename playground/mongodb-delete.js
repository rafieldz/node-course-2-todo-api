// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to DB Server', err);
  }
  console.log('Connected to MongoDB Server');

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

// deleteOne
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

  // db.close();

  // db.collection('Users').deleteMany({name: 'Rafael'}).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users')
  .deleteOne({ _id: new ObjectID("5badd5abf66ab40a3090b36d")})
  .then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
});
