import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Order } from '../../types/Order';
// import UserModel, { UserSequelizeModel } from './user.model';

type OrderInputtableTypes = Optional<Order, 'id'>;
type OrderSequelizeModelCreator = ModelDefined<Order, OrderInputtableTypes>;
export type OrderSequelizeModel = Model<Order, OrderInputtableTypes>;

const OrderModel: OrderSequelizeModelCreator = db.define('Order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'orders',
  timestamps: false,
  underscored: true,
});

// OrderModel.belongsTo<Model<Order, OrderInputtableTypes>, 
// UserSequelizeModel>(UserModel, {
//   foreignKey: 'userId',
//   as: 'user', 
// });

export default OrderModel;
