import { Admin } from "./admin.interface";
import {Request , Response} from "express"

export interface IController{
    registerController(req : Request , res : Response) : Promise<Admin>
}