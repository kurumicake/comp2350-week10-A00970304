const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize("mysql://freedb_cwan_main:n!?hTMRsJ2GNPM*@sql.freedb.tech/freedb_comp2350-week2-A00970304");

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
