<template>
    <ul>
        <li v-for="star in maxStars" :class="rate(grade, maxStars, star)"></li>
    </ul>
</template>

<script setup lang="ts">
    export interface RatingProps {
        grade: number,
        maxStars: number
    }

    defineProps<RatingProps>()

    function rate(grade: number, maxStars: number, index: number){
        const stars = grade * (maxStars/10)
        if(index <= stars) {
            return 'fa fa-star checked'
        } else if(index-0.5 <= stars) {
            return 'fa-solid fa-star-half-stroke checked'
        } else return 'fa-regular fa-star checked'
    }
</script>

<style scoped>
    @import url("https://use.fontawesome.com/releases/v6.0.0/css/all.css");

    ul {
        padding-left: 0;
    }

    .checked {
        color: rgb(212, 75, 94)
    }
</style>