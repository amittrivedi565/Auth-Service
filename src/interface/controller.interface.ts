import { Admin } from "./admin.interface";
import {Request , Response} from "express"

export interface IController{
    registerController(req : Request , res : Response) : Promise<void>
    loginController(req : Request , res : Response) : Promise<void>
    verifyTokenController(req : Request , res : Response) : Promise<void>
}