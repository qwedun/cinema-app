
export interface Data<T> {
    docs: T[];
    /** Общее количество результатов */
    total: number;
    /** Количество результатов на странице */
    limit: number;
    /** Текущая страница */
    page: number;
    /** Сколько страниц всего */
    pages: number;
}

export interface Rating {
    /**
     * Рейтинг кинопоиска
     * @example 6.2
     */
    kp?: number | null;
    /**
     * Рейтинг IMDB
     * @example 8.4
     */
    imdb?: number | null;
    /**
     * Рейтинг TMDB
     * @example 3.2
     */
    tmdb?: number | null;
    /**
     * Рейтинг кинокритиков
     * @example 10
     */
    filmCritics?: number | null;
    /**
     * Рейтинг кинокритиков из РФ
     * @example 5.1
     */
    russianFilmCritics?: number | null;
    /**
     * Рейтинг основанный на ожиданиях пользователей
     * @example 6.1
     */
    await?: number | null;
}

export interface ShortImage {
    /** Чтобы найти фильмы с этим полем, используйте: `!null` */
    url?: string | null;
    /** Чтобы найти фильмы с этим полем, используйте: `!null` */
    previewUrl?: string | null;
}


export interface PersonInMovie {
    id?: number | null;
    photo?: string | null;
    name?: string | null;
    enName?: string | null;
    description: string;
    profession: Profession[];
    enProfession: string;
    birthday: string;
    facts: FactInMovie[];
}

export interface MovieFromPerson {
    id: number;
    name: string;
    alternativeName: string;
    rating: number;
}
export interface FactInMovie {
    value: string;
    type: string;
    spoiler: boolean;
}

export interface MovieEntity {
    id: number;
    name: string | null;
    alternativeName: string | null;
    enName: string;
    names: string[];
    type: string;
    year: number;
    description: string | null;
    shortDescription: string;
    logo: string;
    poster: ShortImage;
    backdrop: ShortImage;
    rating: Rating | null;
    ageRating: number;
    votes: number;
    movieLength: number | null;
    genres: Genre[];
    countries: Country[];
    releaseYears: number[];
    persons: Person[];
    facts: FactInMovie[];
    similarMovies: SimilarMovie[];
    videos: Videos;
}
interface Videos {
    trailers: Trailer[];
}
interface Trailer {
    url: string;
}
export interface SimilarMovie {
    id: number;
    name?:string;
    type?:string;
    poster?: ShortImage;
    rating?: Rating;
    year?: number;
}
export interface Country {
    name: string;
}

export interface Genre {
    name: string;
}
export interface SearchMovieEntity
    extends Omit<MovieEntity, 'backdrop' | 'poster' | 'rating'> {
    backdrop: string;
    poster: string;
    rating: number;
}


export interface Profession {
    value?: string;
}

export interface Person {
    id: number;
    name?: string | null;
    enName?: string | null;
    photo?: string | null;
    profession?: string | null;
    enProfession?: string | null;
}

export interface ApiConfig {
    page?: number;
    number?: number;
    limit?: number;
    selectFields?: string[];
    notNullFields?: string[];
    sortField?: string[];
    sortType?: string;
    id?: number;
    type?: string;
    year?: number;
    ['rating.kp']?: string;
    ['persons.id']?: string;
    ['genres.name']?: string;
    movieLength?: string;
    query?: string;
}

export type Movies = Data<MovieEntity>;

export type SearchMovies = Data<SearchMovieEntity>;