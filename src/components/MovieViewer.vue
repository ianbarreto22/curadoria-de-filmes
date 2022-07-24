<template>
    <div>
        <div>
            <MovieCard :movie="moviesStore.movies[currentMovie]"></MovieCard>
        </div>
        <div>
            <a @click="dislike">NÃO GOSTEI</a>
            <a @click="skip">PULAR</a>
            <a @click="like">GOSTEI</a>
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
    div {
        display: block;
        --text-color:rgb(31, 218, 31);
        --bg-color: black;
        font-family: 'Galyon', sans-serif;
    }

    a {
        margin: 15px;
        background-color: var(--bg-color);
        color: var(--text-color);
        padding: 10px 15px 10px 15px;
        border: 1px solid var(--text-color);
        border-radius: 25px;
    }

    a:hover {
        transition: 0.2s;
        cursor:pointer;
        background-color:var(--text-color);
        color: white;
    }
</style>