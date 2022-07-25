<template>
    <div class="root">
        <h1>filmes não curtidos</h1>
        <MovieList :movies="dislikedMovies"/>
    </div>
    
</template>

<script setup lang="ts">
import { moviesStore } from '@/store/movies.store';
import MovieList from '../components/MovieList.vue';

    const dislikedMovies = moviesStore.dislikedMovies
</script>

<style scoped>
    .root{
        display: flex;
        flex-direction: column;
        align-items: center;

        color:white;
        font-family: 'Galyon', sans-serif;
    }

    h1{
        text-transform: uppercase;
        float: left;
        width: fit-content;
    }
</style>