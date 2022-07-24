<script setup lang="ts">
import Header from './components/Header.vue';
import { moviesStore } from './store/movies.store';

  moviesStore.initMovies()
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
