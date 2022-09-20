import localStrategy  from 'passport-local';
const LocalStrategy = localStrategy.Strategy
import passport from "passport"

import  UserModel  from '../model/User.model'
passport.use('local', new LocalStrategy(async (username, password, done) => {
 const user = await UserModel.findOne({ username: username });
 if (!user) {
 return done(null, false);
 } else {
 if (user.password === password) {
 return done(null, user);
 } else {
 return done(null, false);
 }
 }
}));
passport.serializeUser((user, done) => {
  done(null, user)
 })
 passport.deserializeUser(function (user, done) {
  done(null, user);
 });


export default passport;