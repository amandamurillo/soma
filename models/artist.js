module.exports = function (sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        genre: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Artist;
};
