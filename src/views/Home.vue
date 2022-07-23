<template>
    <p></p>
</template>

<script setup lang="ts">
    import API_KEY from '@/api';
    import axios from 'axios';
    import { ref } from 'vue';
    import MovieCard from '../components/MovieCard.vue'
    import { moviesStore } from '../store/movies.store'
    import type { MoviesResponse } from '../store/movies.store'

    const currentMovie = ref<number>(0)

    async function getMovies() {
        try{
            const {data,status} = await axios
            .get<MoviesResponse>("https://api.themoviedb.org/3/movie/popular" + API_KEY)
            return data
        } catch (error){
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    var movies
    getMovies().then((res) => {
        
    })

    function skipMovie(){
        currentMovie.value +=1
    }

    function likeMovie(){
        
    }

    function dislikeMovie(){

    }
</script>