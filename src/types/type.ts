export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    tagline: string;
    budget: number;
    revenue: number;
    runtime: number;
    overview: string;
}

export interface MovieResults {
    results: IMovie[];
}