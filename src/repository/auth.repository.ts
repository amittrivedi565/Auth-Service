import { IRepository } from "../interface/repository.interace";
import {Admin} from "../interface/admin.interface"
import { PrismaService } from "../service/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import config from "../config/config";

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
            console.log(`Error occurred in Database Layet : ${error}`)
            return {message : error} 
        }
    }
    async find(data: Admin): Promise<Admin | { message: string; }> {
        try {

            const emailChecker = await this.prisma.client.admin.findFirst({
                where : {
                    email : data.email
                }
            })

            if(!emailChecker){
                return ({message : "Invalid email!"})
            }

            const passwordChecker = await bcrypt.compare(data.password,emailChecker.password)

            if(!passwordChecker){
                return ({message : "Invalid password!"})
            }
            
            const secretKey = config.JWT_SECRET as string

            const token = jwt.sign({ email: data.email, id: emailChecker.id }, secretKey, { expiresIn: "30m" });

            return {message : token}
            
        } catch (error : any) {
            console.log(`Error occurred in Repository Layer : ${error}`)
            return error
        }
    }
}