module.exports = (sequelize, DataType) => {
    const Cor = sequelize.define("cor", {
        idcor:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataType.STRING(200),
            allowNull: false,
        },
    },
        {
            tableName: "cor",
            timestamps: false,
        }
        
         
        );
    
        return Cor;
    
    };