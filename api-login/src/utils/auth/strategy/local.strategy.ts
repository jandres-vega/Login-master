import {Strategy} from "passport-local";
import {AuthService} from "../../../services";

const options = {
    usernameField: 'email',
    passwordField: 'password'
};

const authService = new AuthService();

const localStrategy = new Strategy(options, async(email:string, password:string, done) => {
    try {
        const user = await authService.getUser(email, password);
        done(null, user);
    }catch (e) {
        done(e);
    }
});

export { localStrategy };