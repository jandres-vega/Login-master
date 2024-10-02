import {prisma} from "../../libs";

class UserService {

    async getUserByEmail(email: string){
        return prisma.user.findUnique({
            where: {email}
        });
    }

    async findUsers() {
        return prisma.user.findMany();
    }
}

export {UserService};