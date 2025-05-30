export interface filtered_stocks{
    articleID :string,
    total_qtestock :string,
}

export interface StockStat{
    filtered_stocks: filtered_stocks[],
    total_articles: string,
}