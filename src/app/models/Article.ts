import { Category } from "./Category";
import { Forme } from "./Forme";

export interface Article{
    id:string,
    refEHK:string,
    designation:string,
    marque:string,
    accessoire:string,
    refOrigine:string,
    prixHT:string,
    imageart:string,
    categorieID:string,
    formeID:string,
    categorie:Category,
    forme:Forme,

}