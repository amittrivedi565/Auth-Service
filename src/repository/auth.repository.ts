import { IRepository } from "../interface/repository.interace";
import {Admin} from "../interface/admin.interface"
import { PrismaService } from "../service/database";
import bcrypt from "bcrypt";

export class AuthRepository implements IRepository{

    private prisma: PrismaService

    constructor(prisma : PrismaService){
        this.prisma = prisma
    }
    
   async create(data: Admin): Promise<Admin> {
        try {

            const hashedPassword = await bcrypt.hash(data.password,10) 

            const input = {
                email : data.email,
                password : hashedPassword
            }

            return await this.prisma.client.admin.create({
                data : input
            })
        } catch (error : any) {
            console.log(`Error Occurred in Database Layet : ${error}`)
            return error 
        }
    }
}