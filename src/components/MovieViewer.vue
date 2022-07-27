<template>
    <div class="root">

        <MovieCard v-if="moviesStore.movies[currentMovie] != undefined" :movie="moviesStore.movies[currentMovie]"/>

        <div class="row">
            <a @click="dislike"><i class="fa-solid fa-thumbs-down"></i><p>não gostei</p></a>
            <a @click="skip"><i class="fa-solid fa-forward"></i><p>pular</p></a>
            <a @click="like"><i class="fa-solid fa-thumbs-up"></i><p>gostei</p></a>
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

    @media(max-width: 960px){
        a{
            height: fit-content;
        }

        i {
            padding: 5px;
        }

        a p {
            display: none;
        }
    }

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
        border: 1px solid var(--text-color);
        height: fit-content;
        padding: 5px 10px;
        border-radius: 20px;
        margin: 15px;
        text-transform: capitalize;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a i, a p{
        height: fit-content;
        margin-left: 5px;
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
        flex-direction: row;
    }
</style>