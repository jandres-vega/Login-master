import {Strategy, ExtractJwt} from 'passport-jwt';
import {config} from "../../../config";
import {JwtOptions, Payload} from "../../../types";

const options:JwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt_secret
};

// eslint-disable-next-line no-unused-vars
const jwtStrategy = new Strategy(options, (payload:Payload, done:(_error:null, payload:Payload) => void) =>{
    return done(null, payload);
});

export { jwtStrategy };