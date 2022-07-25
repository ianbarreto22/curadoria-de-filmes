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
    i{
        font-size: 100px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 300px);
        grid-gap: 15px;
        list-style: none;
    }
    li {
        margin-left: 5px;
    }
</style>