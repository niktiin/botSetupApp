<template>
  <div class="header">
    <div class="header__content">
      <h2 class="header__title">{{ title }}</h2>
      <span class="header__routeContext"
        >{{ routeContextPrefix }}{{ routeContext }}</span
      >
    </div>
    <button class="header__action material-icons" @click="callAction()">
      {{ actionIcon }}
    </button>
  </div>
</template>

<script>
export default {
  name: "component_name_header",
  props: {
    title: String,
    routeContextPrefix: String,
    routeContext: String,
    actionIcon: String,
  },
  methods: {
    callAction() {
      this.$emit("callAction");
    },
  },
};
</script>

<style lang="scss">
.header {
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 1em;
  background: #aa00ff;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  &__title {
    margin: 0;
    background: #e254ff;
    color: #fff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  &__routeContext {
    background: #ffb314;
    padding: 2px 8px;
    color: #000;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    cursor: pointer;
  }
  &__action {
    background: #7200ca;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
    align-self: stretch;
    aspect-ratio: 1 / 1;
    border: none;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    &:hover {
      background: #6600b4;
    }
  }
}
</style>
