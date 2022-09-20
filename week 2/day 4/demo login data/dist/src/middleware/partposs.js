"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth2_1 = __importDefault(require("passport-google-oauth2"));
const passport_local_1 = __importDefault(require("passport-local"));
const LocalStrategy = passport_local_1.default.Strategy;
const GoogleStrategy = passport_google_oauth2_1.default.Strategy;
const passport_1 = __importDefault(require("passport"));
const User_model_1 = __importDefault(require("../model/User.model"));
passport_1.default.use('local', new LocalStrategy(async (username, password, done) => {
    const user = await User_model_1.default.findOne({ username: username });
    if (!user) {
        return done(null, false);
    }
    else {
        if (user.password === password) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
}));
passport_1.default.use(new GoogleStrategy({
    clientID: "961158771642-jept40cgbe39imihk1qef1ifpm0e0gn6.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
}, async (request, accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile, 'profile');
        let existingUser = await User_model_1.default.findOne({ 'google.id': profile.id });
        if (existingUser) {
            return done(null, existingUser);
        }
        console.log('Creating new user...');
        const newUser = new User_model_1.default({
            google: {
                id: profile.id,
            },
            username: profile.emails[0].value,
            password: null
        });
        await newUser.save();
        console.log(newUser, 'newUser');
        return done(null, newUser);
    }
    catch (error) {
        return done(null, false);
    }
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
exports.default = passport_1.default;
//# sourceMappingURL=partposs.js.map