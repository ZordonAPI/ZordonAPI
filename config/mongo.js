const mongoose = require("mongoose");

const connectToMongo = function() {
  mongoose.connect(
    "mongodb://localhost:27017/zordonAPI",
    { useNewUrlParser: true }
  );
};

const getConnection = function() {
  return mongoose.connection;
};

module.exports = {
  connectToMongo: connectToMongo,
  getConnection: getConnection
};
