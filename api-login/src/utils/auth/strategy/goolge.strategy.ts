import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import {config} from "../../../config";
import {GoogleOptions} from "../../../types";
// import {UserService} from "../../../services";
// import {prisma} from "../../../libs";

const options:GoogleOptions = {
    clientID: config.google_client_id,
    clientSecret: config.google_secret,
    callbackURL: 'http://localhost:3000/api/v1/auth/google/callback'
}

// const userService = new UserService();

const googleStrategy = new GoogleStrategy(options, async (accessToken: string, _refreshToken: string, profile: any, done: any) => {
    try {
        console.log('accessToken ', accessToken);
        console.log('profile ', profile);

        return done(null, profile);
    }catch (e){
        return done(e, null);
    }
})

export { googleStrategy };

