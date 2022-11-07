<template>
  <div class="component">
    <component-header
      :title="header.title"
      :routeContext="header.context"
      :routeContextPrefix="header.routeContextPrefix"
      actionIcon="close"
      @callAction="hideComponent()"
    />
    <component-route-body
      v-if="component.type == 'route'"
      :component="component"
    />
    <component-handler-body
      v-if="component.type == 'handler'"
      :component="component"
    />
  </div>
</template>

<script>
import ComponentHeader from "./ComponentHeader.vue";
import ComponentRouteBody from "./ComponentRouteBody.vue";
import ComponentHandlerBody from "./ComponentHandlerBody.vue";
export default {
  name: "component_name_body",
  components: {
    ComponentHeader,
    ComponentRouteBody,
    ComponentHandlerBody,
  },
  props: {
    component: Object,
    index: Number,
  },
  computed: {
    header() {
      let { title, context, routeContextPrefix } = this.component.header;
      return { title, context, routeContextPrefix };
    },
  },
  methods: {
    hideComponent() {
      const el = this.$el;
      this.$store.state.components[this.index].dragBeforeHideElementCord.x =
        el.getBoundingClientRect().left;
      this.$store.state.components[this.index].dragBeforeHideElementCord.y =
        el.getBoundingClientRect().top;
      this.$store.state.components[this.index].isHidden = true;
    },
    showComponent(index) {
      const el = this.$el;
      el.style.left = `${this.$store.state.components[index].dragBeforeHideElementCord.x}px`;
      el.style.top = `${this.$store.state.components[index].dragBeforeHideElementCord.y}px`;
      this.$store.state.components[index].isHidden = false;
    },
  },
};
</script>

<style lang="scss">
.component {
  border-radius: 4px;
  overflow: hidden;
  background: #f5f5f5;
  max-width: 20vw;
  min-width: var(--componentMinWidth);
  display: flex;
  flex-direction: column;
  &_type_route {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 8px;
    padding: 16px;
  }
}
.componentIsHidden {
  opacity: 0.5;
}
.componentIsMoving {
  position: absolute;
}
</style>
