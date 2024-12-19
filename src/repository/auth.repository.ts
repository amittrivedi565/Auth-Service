import { IRepository } from "../interface/repository.interace";
import {Admin} from "../interface/admin.interface"
import { PrismaService } from "../service/database";
import bcrypt from "bcrypt";

export class AuthRepository implements IRepository<Admin>{

    private prisma: PrismaService

    constructor(prisma : PrismaService){
        this.prisma = prisma
    }
    
   async create(data: Admin): Promise<Admin | {message : string}> {
        try {


            const emailChecker = await this.prisma.client.admin.findFirst({
                where : {
                    email : data.email
                }
            })

            if(emailChecker){
                return ({message : "This email already exists!"})
            }

            const hashedPassword = await bcrypt.hash(data.password,10) 

            const input = {
                email : data.email,
                password : hashedPassword
            }

            const admin = await this.prisma.client.admin.create({
                data : input
            })
            return admin 
        } catch (error : any) {
            console.log(`Error Occurred in Database Layet : ${error}`)
            return {message : error} 
        }
    }
}