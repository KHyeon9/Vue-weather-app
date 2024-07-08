<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();


  // 앱이 실행되면 날시 데이터를 가져오는 로직
  onMounted(() => {
    store.dispatch('getWeather');
  });

  const onSearchCity = (city) => {
    weatherData.value.city = city;
    getWeather();
  }
</script>

<template>
  <Navbar />
  <div v-if="!$store.state.toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style lang="scss" scoped>

</style>
