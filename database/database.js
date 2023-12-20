const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tp2_nodejs', 'root', 'CdEkE0?8', { 
    host: 'localhost', dialect: 'mariadb',
 });

sequelize.authenticate()
    .then(() => {
        console.log("Authentification réussie");
    })
    .catch((err) => {
        console.error("Erreur d'authentification :", err);
    });

module.exports = sequelize