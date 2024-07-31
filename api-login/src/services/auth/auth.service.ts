import {User} from "../../types";
import * as bcrypt from 'bcrypt';
import {UserService} from "../user/user.service";
import {prisma} from "../../libs";
import Boom from "@hapi/boom";

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
}

export { AuthService };