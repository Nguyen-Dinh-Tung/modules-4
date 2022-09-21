"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const User_model_1 = __importDefault(require("src/model/User.model"));
const LocalStrategy = passport_local_1.default.Strategy;
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
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser(function (user, done) {
    done(null, user);
});
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map