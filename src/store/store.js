import { createStore } from "vuex";

// store 만들기
export default createStore({
  state: {
    // initial state
    count: 0,
    // 날씨 데이터 상태변수
    weatherData: {
      icon: 'icon',
      temp: 0,
      text: 'text',
      location: 'location',
      city: 'Seoul',
    },
    toggle: false, // true일 때, about을 보여줌
  },

  mutations: {
    // 데이터 변경
    addCount(state, payroad) {
      state.count += 1 + payroad;
    },

    // 날씨 데이터 상태변수
    updateWeather(state, payroad) {
      state.weatherData.icon = payroad.weather[0].icon;
      state.weatherData.temp = payroad.main.temp;
      state.weatherData.text = payroad.weather[0].description;
      state.weatherData.location = payroad.sys.country;
      state.weatherData.city = payroad.name;
    },

    onSearchCity(state, payroad) {
      state.weatherData.city = payroad;
    },

    toggleButton(state) {
      state.toggle = !state.toggle;
    }
  },

  actions: {
    getWeather(context) {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${API_KEY}`;
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          // mutation 함수로 날씨 정보 업데이트
          context.commit('updateWeather', data);
        })
        .catch(err => {
          alert('에러가 발생했습니다. 잠시 후에 다시 시도해 주세요.');
        })
    }
  }
})