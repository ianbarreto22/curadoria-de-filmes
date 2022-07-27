<template>
    <div class="root">
        <div>
            <h1>Filmes Curtidos ({{moviesStore.likedMovies.length}})</h1>
        </div>
        <MovieList :movies="likedMovies"/>
    </div>
</template>

<script setup lang="ts">
import { moviesStore } from '@/store/movies.store';
import MovieList from '../components/MovieList.vue';

    const likedMovies = moviesStore.likedMovies
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
        text-align: center;
    }
</style>