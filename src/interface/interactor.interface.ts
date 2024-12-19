import { Admin } from "./admin.interface";

export interface IInteractor{
    registerInteractor(input : Admin) : Promise<Admin | {message : string}>
    loginInteractor(input : Admin) : Promise<Admin | {message : string}>
    verifyTokenInteractor(input : string) : Promise<any>
}