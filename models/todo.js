module.exports = (sequelize, DataTypes)=>{
  const newTodo = sequelize.define("new_todo", {
    content: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
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
  return newTodo;
}