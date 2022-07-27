import { reactive, type Ref } from "vue"
import API_KEY from "@/api"
import axios from "axios"
import {ref} from 'vue'


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
    initMovies: (page: number) => void
    movies: Movie[]
    likeMovie: (index: number) => void
    dislikeMovie: (index: number) => void
    updateMovies: (mvs: Movie[]) => void
    skipMovie: (index: number) => void
    likedMovies: Movie[]
    dislikedMovies: Movie[],
    currentPage: Ref<number>
}

export interface MoviesResponse {
    results: Movie[]
}

function returnRefNumber(ref: Ref<number> | number, add: number){
    console.log(ref)
    return (ref as number + add) as number
}

export const moviesStore = reactive<MoviesStore>({

    movies: reactive<Movie[]>([]),
    likedMovies: reactive<Movie[]>([]),
    dislikedMovies: reactive<Movie[]>([]),
    currentPage: ref<number>(1),

    likeMovie(index: number){
        const likedMovie = {...this.movies[index]}
        this.likedMovies.unshift(likedMovie)
        this.movies.splice(index, 1);
        
        console.log(this.likedMovies)
        if(this.movies.length === 0){
            this.currentPage = ref<number>(returnRefNumber(this.currentPage, 1))
            this.initMovies(returnRefNumber(this.currentPage,0))
        }
    },

    dislikeMovie(index: number){
        const dislikedMovie = {...this.movies[index]}
        this.dislikedMovies.unshift(dislikedMovie)
        this.movies.splice(index, 1);
        console.log(this.dislikedMovies)

        if(this.movies.length === 0){
            this.currentPage = ref<number>(returnRefNumber(this.currentPage, 1))
            this.initMovies(returnRefNumber(this.currentPage,0))
        }
    },

    updateMovies(mvs: Movie[]){
        this.movies = [...mvs]
    },

    skipMovie(index: number){
        const skipped = {...this.movies[index]}
        this.movies.splice(index, 1)
        this.movies.push(skipped)
    },

    initMovies(page: number){
        console.log(page)
        axios.get<MoviesResponse>("https://api.themoviedb.org/3/movie/popular" + API_KEY + page).then((response) => {
            this.movies = response.data.results
            console.log(response.data.results)
        });

    }

})

