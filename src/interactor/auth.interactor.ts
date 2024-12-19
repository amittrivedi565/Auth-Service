import { Admin } from "../interface/admin.interface";
import { IInteractor } from "../interface/interactor.interface";
import { IRepository } from "../interface/repository.interace";

export class AuthInteractor implements IInteractor{

    private repository : IRepository

    constructor(repository : IRepository){
        this.repository = repository
    }
    
    async registerInteractor(input: Admin): Promise<Admin>  {
        try {
            return await this.repository.create(input)
        } catch (error : any) {
            console.log(`Error occured in Interactor Layer : ${error}`)
            return error
        }
    }
}