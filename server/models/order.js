'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Car, { foreignKey: "car_id" })

    }
  }
  Order.init({
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Order Date Cannot Be Empty"
        },
        notNull: {
          msg: "Order Date Cannot Be Empty"
        }
      }
    },
    pickup_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Pickup Date Cannot Be Empty"
        },
        notNull: {
          msg: "Pickup Date Cannot Be Empty"
        }
      }
    },
    dropoff_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Dropoff Date Cannot Be Empty"
        },
        notNull: {
          msg: "Dropoff Date Cannot Be Empty"
        }
      }
    },
    pickup_location: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Pickup Location Cannot Be Empty"
        },
        notNull: {
          msg: "Pickup Location Cannot Be Empty"
        }
      }
    },
    dropoff_location: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Dropoff Location Cannot Be Empty"
        },
        notNull: {
          msg: "Dropoff Location Cannot Be Empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};