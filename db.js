const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_374cc6862a15eb9', 'bb7709fb2436b6', 'dc7b4a5d' , {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql'
});

sequelize.authenticate().then( function (err) {
  if (err) {
    console.log("There is connection in error");
  }
  else {
    console.log("Connection has been established");
  }
});
const db = {};
db.Users = require('./models/grads')(sequelize, Sequelize);

sequelize.sync({  }).then ( (err) => {
  if (err) {
    console.log(err);
  }
});


module.exports = db;
