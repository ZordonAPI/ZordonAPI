const mongoose = require("mongoose");
const DB = require("../config/dbConfig").DB

const connectToMongo = function() {
  mongoose.connect(
    DB,
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
