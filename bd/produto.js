module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define("produto", {
        id:{
            type: DataType.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataType.STRING(200),
            allowNull: false,
        },
        valor: {
            type: DataType.DOUBLE,
            allowNull: false, 
        },
        imagem: {
            type: DataType.TEXT,
            allowNull: false,
        },
        cor: { //chave estrangeira
            type: DataType.STRING(200),
            allowNull: false,
    },

    marca: { //chave estrangeira
        type: DataType.STRING(200),
        allowNull: false,
        },

        datacadastro: {
            type: DataType.DATE,
            allowNull: true,
            toDefaultValue: new (Date),
        },
    },
    
    {
        tableName: "produto",
        timestamps: false,
    }
    
     
    );

    return Produto;

};