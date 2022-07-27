<template>

    <div class="menu" @click="openNav()">
        <i class="fa-solid fa-bars"></i>
    </div>

    <div v-if="showNav" class="overlay">
        <a class="closeBtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
            <router-link to="/filmes-nao-curtidos" @click="selectPage(0)" :class="{selected: currentPage === 0}">Filmes Não Curtidos</router-link>

            <router-link to="/" @click="selectPage(1)" :class="{selected: currentPage === 1}">Filmes Não Curados</router-link>

            <router-link to="/filmes-curtidos" @click="selectPage(2)" :class="{selected: currentPage === 2}">Filmes Curtidos</router-link>
        </div>
    </div>

    <div class="header">

        <router-link to="/filmes-nao-curtidos" @click="selectPage(0)" :class="{selected: currentPage === 0}">Filmes Não Curtidos</router-link>

        <router-link to="/" @click="selectPage(1)" :class="{selected: currentPage === 1}">Filmes Não Curados</router-link>

        <router-link to="/filmes-curtidos" @click="selectPage(2)" :class="{selected: currentPage === 2}">Filmes Curtidos</router-link>

    </div>
</template>


<style scoped>
@media(max-width: 960px){
  .header {
    display: none;
  }

  .menu {
    float: left;
    color: white;
    padding: 2px;
  }

  .menu:hover {
    cursor: pointer;
  }

}

@media(min-width: 961px){
    .menu {
        display: none;
    }

    .header{
        display: flex;
        flex-direction: row;
    }
}

.overlay {
    height: 100%;
    width: 75%;
    display: block;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(56, 54, 54);
}

.overlay-content {
    position: relative;
    top: 40px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
}

.closeBtn{
    font-size: 25px;
    float: right;
}

div {
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

    const showNav = ref<boolean>(false)

    function selectPage(n: number){
        currentPage.value = n
    }

    function closeNav(){
        showNav.value = false
    }

    function openNav(){
        showNav.value = true
    }

</script>