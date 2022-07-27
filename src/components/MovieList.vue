<template>
    <ul>
        <li v-for="(movie,index) in movies" :key="index"><MovieCard :movie="movie"/></li>
    </ul>
    <div v-if="movies.length === 0">
        <i class="fa-regular fa-file-video"></i>
        <h3>NENHUM FILME</h3>
    </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/store/movies.store';
import MovieCard from './MovieCard.vue';


    export interface MovieListProps {
        movies: Movie[]
    }

    defineProps<MovieListProps>()

</script>

<style scoped>

    @media(max-width: 960px){
        ul {
            display: grid;
            grid-template-columns: repeat(1, 300px);
            grid-gap: 15px;
            padding: 0;
            list-style-type: none;
        }
        li {
            margin-left: 0;
        }
    }

    @media(min-width: 961px){
        ul {
            display: grid;
            grid-template-columns: repeat(3, 300px);
            grid-gap: 15px;
            list-style: none;
        }
        li {
            margin-left: 5px;
        }
    }

    i{
        font-size: 100px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>