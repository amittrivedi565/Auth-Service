import { Admin } from "./admin.interface"
export interface IRepository{
    create(data : Admin ) : Promise<Admin>
}