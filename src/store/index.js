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
    componentContents: {
      route: {
        buttons: [
          {
            label: "добавить сообщение",
          },
          {
            label: "использовать клавиатуру",
          },
          {
            label: "использовать парсер",
          },
          {
            label: "прекрепить файл",
          },
          {
            label: "испольозвать обработчик",
          },
        ],
      },
      handler: {
        buttons: [
          {
            label: "добавить маршрут",
          },
        ],
      },
    },
    components: [
      {
        isMoving: false,
        isHidden: false,
        isAbsolutePosition: false,
        dragStartElementCord: { x: null, y: null },
        dragBeforeHideElementCord: { x: null, y: null },
        type: "route",
        header: {
          context: "global",
          title: "/start",
          routeContextPrefix: "Для @",
        },
      },
      {
        isMoving: false,
        isHidden: false,
        isAbsolutePosition: false,
        dragStartElementCord: { x: null, y: null },
        dragBeforeHideElementCord: { x: null, y: null },
        type: "handler",
        header: {
          context: "start",
          title: "Обработчик",
          routeContextPrefix: "Для /",
        },
      },
    ],
  },
  getters: {
    getProfile({ profile }) {
      return profile;
    },
    getSidebar({ sidebar }) {
      return sidebar;
    },
    getComponents({ components }) {
      return components;
    },
    getComponentContents:
      ({ componentContents }) =>
      (type) => {
        return componentContents[type];
      },
  },
  mutations: {
    hideRoute({ routes }, index) {
      routes.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
