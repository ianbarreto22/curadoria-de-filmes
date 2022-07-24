<template>
    <MovieList :movies="likedMovies"/>
</template>

<script setup lang="ts">
import { moviesStore } from '@/store/movies.store';
import MovieList from '../components/MovieList.vue';

    const likedMovies = moviesStore.likedMovies
</script>