import { createStore } from "vuex";

export default createStore({
  state: {
    profile: {
      botname: "yourbotname",
    },
    sidebar: {
      buttons: [
        "Создать маршут",
        "Удалить маршрут",
        "Скрыть маршруты",
        "Скрыть обработчики",
        "Экспорт",
        "Импорт",
        "Деплой",
      ],
    },
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getSidebar(state) {
      return state.sidebar;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
