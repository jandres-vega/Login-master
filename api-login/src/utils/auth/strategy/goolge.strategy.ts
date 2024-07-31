import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import {config} from "../../../config";
import {GoogleOptions} from "../../../types";
import {UserService} from "../../../services";
import {prisma} from "../../../libs";

const options:GoogleOptions = {
    clientID: config.google_client_id,
    clientSecret: config.google_secret,
    callbackURL: 'https://www.example.com/auth/google/callback'
}

const userService = new UserService();

const googleStrategy = new GoogleStrategy(options, async (accessToken: string, _refreshToken: string, profile: any, done: any) => {
    try {
        let user = await userService.getUserByEmail(profile.emails[0].value);
        if (!user) {
            const dataUser = {
                email: profile.emails[0].value,
                name: profile.displayName
            }
            user = await prisma.user.create({
                data: {
                    ...dataUser,
                    password: accessToken
                }
            });
        }
        return done(null, user);
    }catch (e){
        return done(e, null);
    }
})

export { googleStrategy };

