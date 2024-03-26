const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = require('./path/to/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);

const PetTypeModel = sequelize.define('pet_type', {
    pet_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'pet_type',
    timestamps: false 
});

module.exports = PetTypeModel;
