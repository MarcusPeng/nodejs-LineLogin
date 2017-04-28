var config = require('../config');
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.sql.host,
    user: config.sql.user,
    password: config.sql.password,
    database: config.sql.database
});

const notifydb = {
    saveUserProfile: function(userProfile) {
        const command = "CALL `notifydb`.`sp_saveUserProfile`(?, ?, ?, ?);";
        const parameters = [userProfile.userId, userProfile.displayName, userProfile.pictureUrl, userProfile.statusMessage];
        connection.query(command, parameters, function(err, rows, fields) {
            if (err) throw err;
        });
    },

    getApplicationInfo: function(callback) {
        connection.query('SELECT * FROM applicationInfo', function(err, rows, fields) {
            if (err) throw err;
            callback && callback(rows[0]);
        });
    }
};

module.exports = notifydb;