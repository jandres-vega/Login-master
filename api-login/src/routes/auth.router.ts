import passport from "passport";
import {Router} from "express";
import {registerUserController, signInUserController} from "../controllers";


const router = Router();

router.post('/register', registerUserController);
router.post('/login', passport.authenticate('local'), signInUserController)

export default router;