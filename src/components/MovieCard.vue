<template>
    <div class="card" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w300' + movie?.poster_path + ')'}">
        <p>{{movie?.release_date.slice(0,4)}}</p>
    </div>
</template>

<script setup lang="ts">
    import type { Movie } from '@/store/movies.store';
    import { moviesStore } from '@/store/movies.store';

    export interface MovieCardProps {
        movie: Movie
    } 

    defineProps<MovieCardProps>()

</script>

<style scoped>

.card {
    --bd-radius: 15px;
    --color-bd: black;
    width: 300px;
    height: 428px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border-radius: var(--bd-radius);
    white-space: nowrap;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 15px black;
    margin: 15px;
}

.card p {
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 290px;
    margin: 5px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    font-size: 20px;
    text-shadow: 1px 1px 0.5px #000, -1px 1px 0.5px #000, 1px -1px 0.5px #000, -1px -1px 0.5px #000;
}

</style>