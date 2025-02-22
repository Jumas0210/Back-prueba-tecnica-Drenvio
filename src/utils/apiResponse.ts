import { ApiResponse } from "./interfaces/Iresponse"


export const createResponse = <T>(msg:string,status:number,data:T) : ApiResponse<T> =>{
    return {msg,status,data};
}

export const createBadResponse = <T>(msg:string,status:number) : ApiResponse<T> =>{
    return {msg,status, data: null};
} 