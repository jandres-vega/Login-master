import passport from "passport";
import {Response, Router, Request} from "express";
import {registerUserController, signInUserController} from "../controllers";


const router = Router();

router.post('/register', registerUserController);
router.post('/login', passport.authenticate('local'), signInUserController)
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    (req:Request, res:Response) => {
        console.log(req.user);
        res.redirect('http://localhost:3000');
    }
);

export default router;