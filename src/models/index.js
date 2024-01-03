import User from "./User.js";
import Artist from "./Artist.js"
import Viewer from "./Viewer.js"
import New from "./New.js";
import Review from "./Review.js";
import Admin from "./Admin.js";

Artist.hasMany(New);

Admin.belongsTo(User);
Artist.belongsTo(User);
Viewer.belongsTo(User);

Viewer.belongsToMany(Artist,{as:"followed", foreignKey:"follower_id", through:"follow_followed"})
Artist.belongsToMany(Viewer,{as:"follower", foreignKey:"followed_id",through:"follow_followed"})

Viewer.belongsToMany(Artist,{through: Review});
Artist.belongsToMany(Viewer,{through: Review});

export {
    User,   
    Artist, 
    Viewer,   
    New,
    Admin,
    Review
}
