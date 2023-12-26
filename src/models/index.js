import User from "./User.js";
import Artist from "./Artist.js"
import Viewer from "./Viewer.js"
import New from "./New.js";
import Review from "./Review.js";

Artist.hasMany(New);

Viewer.belongsToMany(Artist,{as:"followed", foreignKey:"follower_id", through:"follow_followed"})
Artist.belongsToMany(Viewer,{as:"follower", foreignKey:"followed_id",through:"follow_followed"})

Viewer.belongsToMany(Artist,{through: Review});
Artist.belongsToMany(Viewer,{through: Review});

export {
    User,   
    Artist, 
    Viewer,   
    New
}
