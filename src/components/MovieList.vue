<template>
    <ul>
        <li v-for="(movie, index) in movies" :key="index">{{movie.title}}</li>
    </ul>
</template>

<script setup lang="ts">
import type { Movie } from '@/store/movies.store';


    export interface MovieListProps {
        movies: Movie[]
    }

    defineProps<MovieListProps>()

</script>