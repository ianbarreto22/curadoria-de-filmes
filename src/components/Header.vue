<template>
    <div>
        <a href="/filmes-nao-curtidos">Filmes Não Curtidos</a>
        <a href="/">Home</a>
        <a href="/filmes-curtidos">Filmes Curtidos</a>
    </div>
</template>


<style scoped>

div {
    display: flex;
    flex-direction: row;
    --bg-color: transparent;
    --text-color: rgb(31, 218, 31);
    font-family: 'Galyon', sans-serif;
}

a {
    margin: 15px;
    background-color: var(--bg-color);
    color: var(--text-color);
}

</style>

<script setup lang="ts">
</script>