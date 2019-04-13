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
        },
        postAddr: function (data, cb) {
            let queryString = `INSERT into UserAddress(ShipAddress1, ShipAddress2, City, State, Zip, Phone, UserId) values('${data.shipAddr1}', '${data.shipAddr2}', '${data.city}', '${data.state}', '${data.zip}','${data.telNo}', '${data.userID}' )`;
            console.log(queryString);
            var queryArgs = [];
            db.dbConnection.query(queryString, queryArgs, function (error, results) {
                if (error) { throw error; }
                cb();
            });
        },
        postCC: function (data, cb) {
            let queryString = `	INSERT into UserCreditCard(CreditCard, ExpMonth, ExpYear, cvv, UserId) values('${data.cardnumber}', '${data.expmonth}', '${data.expyear}', '${data.cvv}', '${data.userID}')`;
            console.log(queryString);
            var queryArgs = [];
            db.dbConnection.query(queryString, queryArgs, function (error, results) {
                if (error) { throw error; }
                cb();
            });
        },

    }
}