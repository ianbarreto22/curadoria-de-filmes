<template>
    <div class="card">
        <img :src="'https://image.tmdb.org/t/p/w300' + movie?.poster_path"/>
        <p>{{movie?.title}}</p>
        <Rating :grade="movie?.vote_average" :maxStars="5"/>
        <p>{{movie?.release_date.slice(0,4)}}</p>
        <a><i class="fa-regular fa-eye"></i>Ver detalhes</a>
    </div>
</template>

<script setup lang="ts">
    import type { Movie } from '@/store/movies.store';
    import { moviesStore } from '@/store/movies.store';
import Rating from './Rating.vue';

    export interface MovieCardProps {
        movie: Movie
    } 

    defineProps<MovieCardProps>()

</script>

<style scoped>
@import url("https://use.fontawesome.com/releases/v6.0.0/css/all.css");

.card {
    margin-top: 15px;
    --bd-radius: 15px;
    --color-bd: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: var(--bd-radius);
    white-space: nowrap;
    background-color: var(--color-bd);
}

.card img {
    border-radius: var(--bd-radius) var(--bd-radius) 0 0;
    border-bottom: 1px solid var(--color-bd);
    width: 300px;
    height: 450px;
}

.card p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 290px;
    margin: 5px;
    color: rgb(212, 75, 94);
    font-size: 20px;
}

.card a {
     color: rgb(212, 75, 94);
     text-decoration: underline;
     margin-bottom: 5px;
}

.card a:hover {
    cursor: pointer;
}

</style>