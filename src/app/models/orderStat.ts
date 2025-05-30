import { Order } from "./Order"
import { OrderLine } from "./OrderLine"
import { Stock } from "./Stock"

export interface Positions{
    articleID :string,
    emplacement :string,
    disponible :string,
    qterest :string,
}

export interface Missing 
{
    articleID :string,
    missing_quantity :string,
}

export interface Order_status
{
    orderline: OrderLine,
    positions: Positions[],
    missing: Missing[],
    total_remaining_stock: string,
}

export interface OrderStat{
    order: Order,
    order_status: Order_status[],
    stock_modifier: Stock[][]
}