import Sequelize from 'sequelize'

const sequelize = new Sequelize('slack', 'postgres', 'postgres')

const models = {
  user: sequelize.import('./users'),
  user: sequelize.import('./channel'),
  user: sequelize.import('./member'),
  user: sequelize.import('./message'),
  user: sequelize.import('./team'),
}

Object.keys(models).forEach(function(modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
