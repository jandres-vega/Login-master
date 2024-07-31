import passport from 'passport';
import {localStrategy} from './strategy/local.strategy';
import {jwtStrategy} from './strategy/jwt.strategy';
import {googleStrategy} from "./strategy/goolge.strategy";

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);
passport.use('google', googleStrategy);