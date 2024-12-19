import { Admin } from "../interface/admin.interface";
import { IController } from "../interface/controller.interface";
import { IInteractor } from "../interface/interactor.interface";
import {Request , Response} from "express"

export class AuthController implements IController{

    private interactor : IInteractor

    constructor(interactor : IInteractor){
        this.interactor = interactor
    }

   async registerController(req : Request , res : Response) : Promise<Admin | any>{
        try {

            const { email , password } = req.body

            const input = {email,password}
            
            const registerAdmin = await this.interactor.registerInteractor(input)

            res.status(200).json(registerAdmin)

        } catch (error : any) {
            console.log(`Error occured in Controller Layer : ${error}`)
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}