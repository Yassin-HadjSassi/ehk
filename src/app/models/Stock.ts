import { Article } from "./Article";

export interface Stock{
    id:string,
    articleID:string,
    emplacementID:string,
    qtestock:string,
    article:Article,
}