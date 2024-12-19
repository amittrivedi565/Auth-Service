import { Admin } from "./admin.interface";

export interface IInteractor{
    registerInteractor(input : Admin) : Promise<Admin>
}