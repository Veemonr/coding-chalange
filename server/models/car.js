'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Order, { foreignKey: "car_id" })
    }
  }
  Car.init({
    car_name: {
      type: DataTypes.STRING(50),
      allowNull: {
        msg: "Car Name Cannot Be Empty"
      },
      validate: {
        notEmpty: {
          msg: "Car Name Cannot Be Empty"
        }
      }
    },
    day_rate: {
      type: DataTypes.DOUBLE,
      allowNull: {
        msg: "Day Rate Cannot Be Empty"
      },
      validate: {
        notEmpty: {
          msg: "Day Rate Cannot Be Empty"
        }
      }
    },
    month_rate: {
      type: DataTypes.DOUBLE,
      allowNull: {
        msg: "Month Rate Cannot Be Empty"
      },
      validate: {
        notEmpty: {
          msg: "Month Rate Cannot Be Empty"
        }
      }
    },
    image: {
      type: DataTypes.STRING(256),
      allowNull: {
        msg: "Image Cannot Be Empty"
      },
      validate: {
        notEmpty: {
          msg: "Image Cannot Be Empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};