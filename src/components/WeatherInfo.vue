<template>
  <div class="weather-info">
    <div class="icon">
      <img 
        :src="`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`" 
        :alt="weatherData.icon">
    </div>
    <div class="temp">{{ (weatherData.temp - 273.15).toFixed(1) }}&deg;</div>
    <div class="text">{{ weatherData.text }}</div>
    <div class="location">{{ weatherData.city }}, {{ weatherData.location }}</div>
  </div>
</template>

<script setup>
  import { useStore } from '../store/store';
  import { storeToRefs } from 'pinia';

  const store = useStore();
  const { weatherData } = storeToRefs(store);

</script>

<style lang="scss" scoped>
  .weather-info {
    padding: 20px;
    & > div {
      margin-bottom: 20px;
      padding: 20px;
      // border: 1px solid #ccc;
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>