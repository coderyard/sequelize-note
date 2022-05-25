'use strict';

import Config from '../config/config.json';
import Sequelize from 'sequelize';
import user from '../models/user.js';
import todo from '../models/todo.js';


const env = process.env.NODE_ENV || 'development';
const config = Config[env]; // 이런식의 구문은 어떻게 모듈 타입으로 작성하지...?
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.newMember = user(sequelize, Sequelize);
db.newTodo = todo(sequelize, Sequelize);

db.newMember.hasMany(db.newTodo, {
  foreignKey: 'id',
  sourceKey: 'id'
});

db.newTodo.belongsTo(db.newMember, {
  foreignKey: 'id',
  sourceKey: 'id'
})

module.exports = db;
