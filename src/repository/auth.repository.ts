import { IRepository } from "../interface/repository.interace";
import {Admin} from "../interface/admin.interface"
import { PrismaService } from "../service/database";

export class AuthRepository implements IRepository{

    private prisma: PrismaService

    constructor(prisma : PrismaService){
        this.prisma = prisma
    }
    
   async create(data: Admin): Promise<Admin> {
        try {
            return await this.prisma.client.admin.create({
                data : data
            })
        } catch (error : any) {
            console.log(`Error Occurred in Database Layet : ${error}`)
            return error 
        }
    }
}