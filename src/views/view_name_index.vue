<template>
  <div class="view_name_index">
    <the-sidebar />
    <div class="frame" ref="frame">
      <component-route
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import TheSidebar from "/src/components/TheSidebar.vue";
import ComponentRoute from "/src/components/ComponentRoute.vue";
export default {
  name: "view_name_index",
  components: {
    TheSidebar,
    ComponentRoute,
  },
  computed: {
    routes() {
      return this.$store.getters.getRoutes;
    },
  },
};
</script>

<style lang="scss">
.view_name_index {
  display: flex;
  flex-direction: row;
}
.frame {
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: flex-start;
}
</style>
