const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Utilisateur_role = sequelize.define('utilisateur_role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: { model: 'role' , key: 'id'},
    },
    utilisateur_id:{
        type: DataTypes.INTEGER,
        references: { model: 'utilisateur' , key: 'id'},
    }
}, {
    freezeTableName: true,
    
});





module.exports = Utilisateur_role;
