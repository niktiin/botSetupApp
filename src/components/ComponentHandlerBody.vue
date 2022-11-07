<template>
  <div class="component_type_route">
    <component-button
      v-for="(button, index) in buttons"
      :key="index"
      :label="button.label"
    />
  </div>
</template>

<script>
import ComponentButton from "./ComponentButton.vue";
export default {
  name: "component__body_type_handler",
  components: { ComponentButton },
  props: {
    component: Object,
  },
  computed: {
    buttons() {
      return this.$store.getters.getComponentContents("handler").buttons;
    },
  },
};
</script>
