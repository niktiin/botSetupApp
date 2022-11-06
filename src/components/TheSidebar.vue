<template>
  <div class="sidebar">
    <component-header
      title="Bot setup config app"
      :routeContext="headerRouteContext"
      routeContextPrefix="Для @"
      actionIcon="settings"
    />
    <div class="sidebar__buttons">
      <component-button
        v-for="(label, index) in sidebarButtons"
        :key="index"
        :label="label"
      />
    </div>
  </div>
</template>

<script>
import ComponentHeader from "./ComponentHeader.vue";
import ComponentButton from "./ComponentButton.vue";

export default {
  name: "component_name_sidebar",
  components: {
    ComponentHeader,
    ComponentButton,
  },
  data: () => ({}),
  computed: {
    headerRouteContext() {
      return this.$store.getters.getProfile.botname;
    },
    sidebarButtons() {
      return this.$store.getters.getSidebar.buttons;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  max-width: 25vw;
  min-width: var(--componentMinWidth);
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5;
  border: 1px solid #f2f2f2;
  box-shadow: 2px 0px 16px #0000001a;
  &__buttons {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 8px;
    padding: 16px;
  }
}
</style>
