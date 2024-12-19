import { Admin } from "./admin.interface"
export interface IRepository<T>{
    create(data : T ) : Promise<T | {message : string}>
    find(data : T ) : Promise<T | {message : string}>
}