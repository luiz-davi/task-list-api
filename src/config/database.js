module.exports = {
  dialect: process.env.DIALECT_SEQUELIZE,
  host: process.env.HOST_SEQUELIZE,
  username: process.env.USERNAME_SEQUELIZE,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME_SEQUELIZE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
