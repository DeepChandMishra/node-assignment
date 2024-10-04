const sequelize = require('../dbconfig/dbconfig');
const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const Cart = require('./Cart')(sequelize);
const Order = require('./Order')(sequelize);

// Define relationships
User.hasMany(Cart, { foreignKey: 'userId' });
Cart.belongsTo(User, { foreignKey: 'userId' });
Product.hasMany(Cart, { foreignKey: 'productId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync().then(() => {
    console.log("Database & tables created!");
});

module.exports = { User,Product,Cart,Order,sequelize };
