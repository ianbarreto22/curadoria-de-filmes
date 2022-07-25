import { reactive } from "vue"
import API_KEY from "@/api"
import axios from "axios"


export interface Movie {
    title: string,
    poster_path: string
    genre_ids: number[],
    overview: string,
    release_date: string,
    vote_average: number,
    backdrop_path: string,
    vote_count: number
}




export interface MoviesStore {
    initMovies: () => void
    movies: Movie[]
    likeMovie: (index: number) => void
    dislikeMovie: (index: number) => void
    updateMovies: (mvs: Movie[]) => void
    skipMovie: (index: number) => void
    likedMovies: Movie[]
    dislikedMovies: Movie[]
}

export interface MoviesResponse {
    results: Movie[]
}

export const moviesStore = reactive<MoviesStore>({

    movies: reactive<Movie[]>([]),
    likedMovies: reactive<Movie[]>([]),
    dislikedMovies: reactive<Movie[]>([]),

    likeMovie(index: number){
        const likedMovie = {...this.movies[index]}
        this.likedMovies.unshift(likedMovie)
        this.movies.splice(index, 1);
        
        console.log(this.likedMovies)
    },

    dislikeMovie(index: number){
        const dislikedMovie = {...this.movies[index]}
        this.dislikedMovies.unshift(dislikedMovie)
        this.movies.splice(index, 1);
        console.log(this.dislikedMovies)
    },

    updateMovies(mvs: Movie[]){
        this.movies = [...mvs]
    },

    skipMovie(index: number){
        const skipped = {...this.movies[index]}
        this.movies.splice(index, 1)
        this.movies.push(skipped)
    },

    initMovies(){
        axios.get<MoviesResponse>("https://api.themoviedb.org/3/movie/popular" + API_KEY).then((response) => {
            this.movies = response.data.results
            console.log(response.data.results)
        });

    }

})

