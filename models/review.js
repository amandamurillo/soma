module.exports = function (sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            defaultValue: "Fan"
        }
    });
    Review.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Review.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        Review.belongsTo(models.Artist, {
            foreignKey: {
              allowNull: false
            }
          });
      };


    return Review;
};
