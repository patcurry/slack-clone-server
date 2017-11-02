export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('team', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  })

  Channel.associate = models => {
    // 1:M
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
    }) 
  }
  
  return Channel 
}
