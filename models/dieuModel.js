const { DataTypes } = require('sequelize');


let sequelize = require('../database/database')

const dieu = sequelize.define('dieu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
});


module.exports = dieu;
