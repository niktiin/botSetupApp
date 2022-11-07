<template>
  <div class="route" :ref="'routeEl' + index">
    <component-header
      @mousemove="moveRouteElement($event)"
      @mousedown="setRouteElementStartCord(true, $event)"
      @mouseup="setDragging(false)"
      :title="title"
      :routeContext="context"
      routeContextPrefix="Для @"
      actionIcon="close"
    />
    <div class="route__body">
      <component-button
        v-for="(label, index) in route.buttons"
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
  name: "component_name_route",
  components: {
    ComponentHeader,
    ComponentButton,
  },
  props: {
    route: Object,
    index: Number,
  },
  mounted() {
    let el = this.$refs["routeEl" + this.index];
    const left = el.getBoundingClientRect().left;
    const top = el.getBoundingClientRect().top;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    this.$nextTick(() => {
      el.style.position = "absolute";
    });
  },
  data: () => ({
    dragging: false,
    routeElementsMargin: { x: 20, y: 0 },
  }),
  computed: {
    title() {
      return this.route.title;
    },
    context() {
      return this.route.context;
    },
  },
  methods: {
    moveRouteElement(event) {
      let el = this.$refs["routeEl" + this.index];
      if (this.dragging) {
        el.style.left = `${event.clientX - this.routeElementsMargin.x}px`;
        el.style.top = `${event.clientY - this.routeElementsMargin.y}px`;
      }
    },
    setRouteElementStartCord(dragging, event) {
      this.dragging = dragging;
      let el = this.$refs["routeEl" + this.index];
      this.routeElementsMargin.x =
        event.clientX - el.getBoundingClientRect().left;
      this.routeElementsMargin.y =
        event.clientY - el.getBoundingClientRect().top;
    },
    setDragging(value) {
      this.dragging = value;
    },
  },
};
</script>

<style lang="scss">
.route {
  border-radius: 4px;
  overflow: hidden;
  background: #f5f5f5;
  max-width: 20vw;
  min-width: var(--componentMinWidth);
  display: flex;
  flex-direction: column;
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 8px;
    padding: 16px;
  }
  &_type_free {
    position: absolute;
  }
}
</style>
