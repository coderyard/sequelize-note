const Sequelize = require('sequelize');
// json을 import하려면 어떻게 해야하는걸까..?

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.newMember = require('./user.js')(sequelize, Sequelize);
db.newTodo = require('./todo.js')(sequelize, Sequelize);

db.newMember.hasMany(db.newTodo, {
  foreignKey: 'id',
  sourceKey: 'id'
});

db.newTodo.belongsTo(db.newMember, {
  foreignKey: 'id',
  sourceKey: 'id'
})

module.exports = db;
