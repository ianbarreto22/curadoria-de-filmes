<template>
    <div class="root">

        <MovieCard :movie="moviesStore.movies[currentMovie]"/>

        <div class="row">
            <a @click="dislike">não gostei</a>
            <a @click="skip">pular</a>
            <a @click="like">gostei</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { moviesStore, type Movie } from '@/store/movies.store';
import { ref, toRefs } from 'vue';
import MovieCard from './MovieCard.vue';

    console.log(moviesStore.movies)

    const currentMovie = ref<number>(0)


    function skip(){
        moviesStore.skipMovie(currentMovie.value)
    }

    function like(){
        moviesStore.likeMovie(currentMovie.value)
    }

    function dislike(){
        moviesStore.dislikeMovie(currentMovie.value)
    }
</script>

<style scoped>

    .root{
        display: flex;
        flex-direction: column;
        align-items: center;

        --text-color:white;
        --bg-color: transparent;
        font-family: 'Galyon', sans-serif;
    }

    a {
        background-color: var(--bg-color);
        color: var(--text-color);
        padding: 10px 15px 10px 15px;
        border: 1px solid var(--text-color);
        border-radius: 25px;
        margin: 15px;
        text-transform: capitalize;
    }

    a:hover {
        transition: 0.2s;
        cursor:pointer;
        background-color:var(--text-color);
        color: rgb(212, 75, 94);
    }

    .row {
        display: flex;
        width: fit-content;
        display: flex;
        flex-direction: row;
    }
</style>