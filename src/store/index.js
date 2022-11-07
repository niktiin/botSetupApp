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
        "Создать обработчик",
        "Удалить обработчик",
        "Скрыть обработчики",
        "Экспорт",
        "Импорт",
        "Деплой",
      ],
    },
    routes: [
      {
        context: "global",
        title: "/start",
        buttons: [
          "добавить сообщение",
          "испольозвать клавиатуру",
          "использовать парсер",
          "прекрепить файл",
          "испольозвать обработчик",
        ],
      },
      {
        context: "global",
        title: "/help",
        buttons: [
          "добавить сообщение",
          "испольозвать клавиатуру",
          "использовать парсер",
          "прекрепить файл",
          "испольозвать обработчик",
        ],
      },
    ],
  },
  getters: {
    getProfile(state) {
      return state.profile;
    },
    getSidebar(state) {
      return state.sidebar;
    },
    getRoutes(state) {
      return state.routes;
    },
  },
  actions: {},
  modules: {},
});
