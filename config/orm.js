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
  updateOne: function (table, objectColumnValues, condition, cb) {
    const queryString = `UPDATE ?? SET ? WHERE ?`;

    connection.query(queryString, [table, objectColumnValues, condition], function (error, result) {
      if (error) throw error;
      cb(result);
    });
  },
};

module.exports = orm;
