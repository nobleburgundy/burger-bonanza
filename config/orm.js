const { connect } = require("./connection");
const connection = require("./connection");

const orm = {
  selectAll: function (table, cb) {
    const query = "SELECT * FROM " + table + ";";
    connection.query(query, function (error, data) {
      if (error) throw error;
      cb(data);
    });
  },
  insertOne: function (val, cb) {
    const queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (?, false)`;
    connection.query(queryString, [val], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function () {
    console.log("orm updateOne");
  },
};

module.exports = orm;
