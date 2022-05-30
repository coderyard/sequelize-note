module.exports = (sequelize, DataTypes) => {
  const newMember = sequelize.define("new_member", {
    // id: { // id는 이렇게 구현하는게 맞는건가..?
    //   type: DataTypes.LONG,
    //   defaultValue: sequelize.literal('AUTO_INCREMENT')
    // },
    // id 컬럼은 기본키로, 시퀄라이즈에선 굳이 작성해주지 않아도 자동으로 생성됨!
    email: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
  });
  // newMember.associate = function(models){
  //   models.User.hasMany(models.Todo, {
  //     foreignKey : 'id',
  //     onDelete: 'cascade'
  //   });
  // }

  return newMember;
}