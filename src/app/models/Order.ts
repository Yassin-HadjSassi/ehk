import { OrderLine } from "./OrderLine";

export interface Order{
    id:string,
    userID:string,
    status:string,
    totalnumber:string,
    prixHT:string,
    prixtotal:string,
    date:string,
    order_lines:OrderLine,
}