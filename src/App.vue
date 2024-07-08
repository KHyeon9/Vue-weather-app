<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { onMounted } from 'vue';
  import { useStore } from './store/store';
  import { storeToRefs } from 'pinia';

  const store = useStore();
  const { toggle } = storeToRefs(store);

  // 앱이 실행되면 날시 데이터를 가져오는 로직
  onMounted(() => {
    store.getWeather();
  });
</script>

<template>
  <Navbar />
  <div v-if="!toggle">
    <MainComp />
  </div>
  <div v-else>
    <About />
  </div>
</template>

<style lang="scss" scoped>

</style>
