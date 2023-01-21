import User from "./User.js";
import Event from "./Event.js"
/*
User.belongsToMany(Artist,{through:"user_artist"});
Artist.belongsToMany(User,{through:"user_artist"}); 
*/

User.belongsToMany(User,{as:"followed", foreignKey:"follower_id", through:"follow_followed"})
User.belongsToMany(User,{as:"follower", foreignKey:"followed_id",through:"follow_followed"})


User.belongsToMany(Event,{as:"futureEvents", foreignKey:"artist_id",through:"artist_event"})
Event.belongsToMany(User,{as:"artist", foreignKey:"event_id",through:"artist_event"})

//User.hasMany(User,{foreignKey:"follower_id",as:"followers"})
export {User, Event}
