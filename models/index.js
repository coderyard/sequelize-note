'use strict';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env]; // 이런식의 구문은 어떻게 모듈 타입으로 작성하지...?
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.newMember = require('./user.js')(sequelize, Sequelize); // 이런 즉치함수도 어떻게 작성해야 하나..?
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
