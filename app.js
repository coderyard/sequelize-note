const {Sequelize} = require('sequelize');
const { sequelize } = require('./models');

const driver = () => {
  sequelize.sync().then(()=>{
    console.log('initialize completed');
  }).catch(err => {
    console.error('fail to initialize');
    console.log(err);
  });
};

driver();