import { reactive } from "vue"
import axios, { AxiosResponse } from "axios"
import API_KEY from "@/api"


export interface Movie {
    title: string,
    poster_path: string
    genre: {
        id: number,
        name: string
    }[],
    overview: string,
    release_date: string,
    vote_average: number
}

export interface MoviesResponse {
    data: Movie[]
}



export interface MoviesStore {
    likeMovie: (movie:  Movie) => void
    dislikeMovie: (movie:  Movie) => void
    likedMovies: Movie[]
    dislikedMovies: Movie[]
}

export const moviesStore = reactive<MoviesStore>({

    likedMovies: reactive<Movie[]>([]),
    dislikedMovies: reactive<Movie[]>([]),

    likeMovie(movie: Movie){
        const newMovie = {...movie}
        this.likedMovies.push(newMovie)
    },

    dislikeMovie(movie: Movie){
        const newMovie = {...movie}
        this.dislikedMovies.push(newMovie)
    },


})

