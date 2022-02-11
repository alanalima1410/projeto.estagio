module.exports = (sequelize, DataType) => {
    const Marca = sequelize.define("marca", {
        idmarca:{
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
            tableName: "marca",
            timestamps: false,
        }
        
         
        );
    
        return Marca;
    
    };