<template>
    <div>

        <router-link to="/filmes-nao-curtidos" @click="selectPage(0)" :class="{selected: currentPage === 0}">Filmes Não Curtidos</router-link>

        <router-link to="/" @click="selectPage(1)" :class="{selected: currentPage === 1}">Filmes Não Curados</router-link>

        <router-link to="/filmes-curtidos" @click="selectPage(2)" :class="{selected: currentPage === 2}">Filmes Curtidos</router-link>

    </div>
</template>


<style scoped>

div {
    display: flex;
    flex-direction: row;
    --bg-color: transparent;
    --text-color: white;
    font-family: 'Galyon', sans-serif;
    justify-content: center;
}

a {
    margin: 15px;
    background-color: var(--bg-color);
    color: var(--text-color);
}

.selected {
    transition: 0.1s;
    border-bottom: 3px solid var(--text-color);
}

</style>

<script setup lang="ts">
import { ref } from 'vue';


    const currentPage = ref<number>(1)

    function selectPage(n: number){
        currentPage.value = n
    }

</script>