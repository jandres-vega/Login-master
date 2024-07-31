import {NextFunction, Request, Response} from "express";
import {User} from "../../../types";
import {AuthService} from "../../../services";

const authService = new AuthService();

const registerUserController = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const user:User = req.body;
        const newUser = await authService.registerUser(user);
        res.status(200).json({message: newUser});
    }catch (e){
        next(e);
    }
}

const signInUserController = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const user:User = req.body;
        const token = await authService.signIn(user);
        res.status(200).json({token});
    }catch (e){
        next(e);
    }
}

export {registerUserController, signInUserController};