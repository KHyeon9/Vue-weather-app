import { defineStore } from "pinia";

// store 만들기
export const useStore = defineStore('main', {
  state: () => ({
    count: 0,
    // 상태변수 정의
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul',
    },
    toggle: false,
  }),
  actions: {
    // 함수 정의
    addCount(payroad) {
      this.count += 1 + payroad;
    },

    updateWeather(payroad) {
      this.weatherData.icon = payroad.weather[0].icon;
      this.weatherData.temp = payroad.main.temp;
      this.weatherData.text = payroad.weather[0].description;
      this.weatherData.location = payroad.sys.country;
      this.weatherData.city = payroad.name;
    },

    onSearchCity(payroad) {
      this.weatherData.city = payroad;
    },

    toggleButton() {
      this.toggle = !this.toggle;
    },

    // 비동기 함수 async
    async getWeather() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.weatherData.city}&appid=${API_KEY}`;
      await fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          // mutation 함수로 날씨 정보 업데이트
          this.updateWeather(data);
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
        })
    }
  }
})
