var db = require('./database');
module.exports = {
    messages: {
        postUser: function (data, cb) {
            let queryString = `INSERT into USer(UserName, UserEmail, Password) values('${data.username}', '${data.useremail}', '${data.userpassword}' )`;
            console.log(queryString);
            var queryArgs = [];
            db.dbConnection.query(queryString, queryArgs, function (error, results) {
                if (error) { throw error; }
                let queryString = `Select UserID from User order by UserId desc limit 1`;
                console.log(queryString);
                var queryArgs = [];
                db.dbConnection.query(queryString, queryArgs, function (error, results) {
                    if (error) { throw error; }
                    cb(results[0].UserID);
                });
            });
        }
    }
}