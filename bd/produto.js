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
        idcor: { //chave estrangeira
            type: DataType.INTEGER,
            allowNull: false,
            references: { //referenciando a chave estrangeira
                model: 'cor',
                key: "idcor",
            },
    },
    idmarca: { //chave estrangeira
        type: DataType.INTEGER,
        allowNull: false,
        references: { //referenciando a chave estrangeira
            model: "marca",
            key: "idmarca",
        },
        datacadastro: {
            type: DataType.DATE,
            allowNull: false,
            toDefaultValue: new (Date),
        },
    },
    },
    {
        tableName: "produto",
        timestamps: false,
    }
    
     
    );

    return Produto;

};