import { any } from "joi";
import { Admin } from "../interface/admin.interface";
import { IInteractor } from "../interface/interactor.interface";
import { IRepository } from "../interface/repository.interace";

export class AuthInteractor implements IInteractor{

    private repository : IRepository<Admin>

    constructor(repository : IRepository<Admin>){
        this.repository = repository
    }
    
    async registerInteractor(input: Admin): Promise<Admin | {message : string}>  {
        try {
            return await this.repository.create(input)
        } catch (error : any) {
            console.log(`Error occurred in Interactor Layer : ${error}`)
            return {message : error}
        }
    }

    async loginInteractor(input: Admin): Promise<Admin | { message: string; }> {
        try {
            return await this.repository.find(input)
        } catch (error : any) {
            console.log(`Error occurred in Interactor Layer : ${error}`)
            return {message : error}
        }
    }

    async verifyTokenInteractor(input: string): Promise<any> {
        try {
            return await this.repository.verifyToken(input)
        } catch (error : any) {
            console.log(`Error occurred in Interactor Layer : ${error}`)
            return {message : error}
        }
    }
}