const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'actividades',
  {
    ida: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)
