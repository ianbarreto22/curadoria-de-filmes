<template>
    <MovieList :movies="dislikedMovies"/>
</template>

<script setup lang="ts">
import { moviesStore } from '@/store/movies.store';
import MovieList from '../components/MovieList.vue';

    const dislikedMovies = moviesStore.dislikedMovies
</script>