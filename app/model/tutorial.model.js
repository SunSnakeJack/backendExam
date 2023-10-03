module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING
        },
        lastname:{
            type: Sequelize.STRING
        },
        university:{
            type: Sequelize.STRING
        },
        graduation:{
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};