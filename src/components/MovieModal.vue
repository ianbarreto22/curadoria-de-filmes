<template>
    <transition>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <button class="modal-default-button" @click="$emit('close')">
                            <i class="fa-solid fa-circle-xmark"></i>
                        </button>
                    </div>

                    <div class="modal-body">
                        <img :src="'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path"/>
                        <div class="details">
                            <h2>{{movie?.title}}</h2>
                            <ul>
                                <li>{{formatarData(movie?.release_date)}}</li>
                                <li>{{formatarGeneros(movie?.genre_ids)}}</li>
                            </ul>
                            <Rating :grade="movie?.vote_average" :max-stars="5"/>
                            <p class="vote_count">({{movie?.vote_count}} avaliações)</p>
                            <p>{{movie?.overview}}</p>
                        </div>
                    </div>

                    <div class="modal-footer">

                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
    import type { Movie } from '@/store/movies.store';
    import {GenreEnum} from '../utils/GenreEnum'
import Rating from './Rating.vue'

    export interface MovieModalProps {
        movie: Movie
    }

    export interface MovieModalEvents{
        (e: 'close'): void
    }

    defineProps<MovieModalProps>()
    defineEmits<MovieModalEvents>()

    function formatarData(data: string){
        console.log(data)
        return data.slice(8,10) + '/' + data.slice(5,7) + '/' + data.slice(0,4)
    }

    function formatarGeneros(genres: number[]){
        let str = ""
        if(genres === undefined) {
            return str
        }
        genres.forEach((genre,index) => {
            if(genre){
                if(GenreEnum[genre]) str += formatarGenero(GenreEnum[genre])
                if(index != genres.length-1 && GenreEnum[genre]) str += ' / '
            }
        })
        return str
    }

    function formatarGenero(genre: string){
        genre = genre.replace(/_/g, " ")
        return genre
    }
</script>

<style scoped>
    @import url("https://use.fontawesome.com/releases/v6.0.0/css/all.css");

    .modal-mask {

        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        min-width: 500px;
        width: fit-content;
        margin: 0px auto;
        padding: 0px 0px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;

        --text-color: rgb(212, 75, 94)
    }

    .modal-header {
        background-color: var(--text-color);
        display: flex;
        flex-direction: row-reverse;
        height: 100px;
    }

    .modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--text-color);
        margin: 15px;
    }

    .modal-default-button {
        position: relative;
        height: fit-content;
        bottom: 15px;
        left: 15px;
        background-color: transparent;
        border: 0;
        color: white;
        font-size: 30px;
        padding: 0;
    }

    .modal-default-button i {
        background-color: var(--text-color);
        border-radius: 50px;
    }

    .modal-default-button:hover {
        cursor: pointer;
    }

    .modal-body  img {
        width: 300px;
        position: relative;
        bottom: 50px;
    }

    .modal-body h2 {
        text-transform: uppercase;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        bottom: 50px;
    }

    .modal-body ul {
        display: flex;
        flex-direction: row;
        margin-top: 0;
        font-size: 15px;
    }

    .modal-body li {
        margin: 15px;
    }

    .modal-body li:nth-child(1) {
        list-style: none;
    }

    .modal-body p {
        white-space: pre-wrap;
        max-width: 400px;
        text-align: justify;
    }

    .vote_count {
        margin-top: 0;
    }
    
</style>