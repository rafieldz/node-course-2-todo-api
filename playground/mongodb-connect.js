// MongoClient v.2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Make connection to the db TodoApp
MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) {
      return console.log(`Unable to connect to database ${err}`);
    }
    console.log(`Connected to MongoDB server ${db}`);

  //   db.collection('Todos').insertOne({
  //       text: 'Something to do',
  //       completed: false
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //  Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
      name: 'Rafael',
      age: 34,
      location: 084456
  }, (err, result) => {
    if (err) {
      return console.log(`Unable to insert user`, err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

    db.close();
});
