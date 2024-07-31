import {PayloadLogin, User} from "../../types";
import * as bcrypt from 'bcrypt';
import {UserService} from "../user/user.service";
import {prisma} from "../../libs";
import Boom from "@hapi/boom";
import jwt from 'jsonwebtoken';
import {config} from "../../config";

const userService = new UserService();

class AuthService {

    async registerUser(user:User):Promise<string>{
        let passBcrypt = '';
        if (user.password) {
            passBcrypt = await bcrypt.hash(user.password, 10);
        }
        const usersFinds = await userService.findUsers();
        const userFind = usersFinds.filter((user) => user.email === user.email);
        if (userFind.length > 0) {
            throw Boom.conflict('El usuario ya existe');
        }

        const newUser = await prisma.user.create({
            data: {
                ...user,
                password: passBcrypt
            }
        });
        if (!newUser) throw Boom.badRequest('Error al crear el usuario');
        return 'Usuario creado exitosamente';
    }

    async getUser(email:string, password:string){
        const userFind:User = await userService.getUserByEmail(email) as User;
        if (!userFind){
            throw Boom.unauthorized('No estas autorizado');
        }
        const isMatch = await bcrypt.compare(password, userFind.password);
        if (!isMatch){
            throw Boom.unauthorized('No estas autorizado');
        }
        return {
            email: userFind.email,
            name: userFind.name
        };
    }

    async signIn(user:User){
        const payload:PayloadLogin = {
            sub: user.id,
            role: user.role
        };
        return jwt.sign(payload, config.jwt_secret, {expiresIn: '1d'});
    }
}

export { AuthService };