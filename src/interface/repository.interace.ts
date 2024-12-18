export interface IRepository<T>{
    create(data : T ) : Promise<T | {message : string}>
    find(data : T ) : Promise<T | {message : string}>
    verifyToken(data :string) : Promise<any>
}