import {prisma} from "../../libs";
import Boom from "@hapi/boom";

class UserService {

    async getUserByEmail(email: string){
        const userFind = await  prisma.user.findUnique({
            where: {email}
        });
        if (!userFind) throw Boom.notFound('User not found');
        return userFind;
    }

    async findUsers() {
        return prisma.user.findMany();
    }
}

export {UserService};