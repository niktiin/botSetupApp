<template>
  <div class="view_name_index">
    <the-sidebar />
    <div class="frame" ref="componentFrame">
      <the-component
        v-for="(component, index) in components"
        :key="index"
        ref="componentsRef"
        :component="component"
        :index="index"
        @mousedown="setComponentIsMoving(index, $event)"
        :class="{
          componentIsMoving: component.isAbsolutePosition,
          componentIsHidden: component.isHidden,
        }"
      />
    </div>
  </div>
</template>

<script>
import TheSidebar from "/src/components/TheSidebar.vue";
import TheComponent from "/src/components/TheComponent.vue";
export default {
  name: "view_name_index",
  components: {
    TheSidebar,
    TheComponent,
  },
  computed: {
    components() {
      return this.$store.getters.getComponents;
    },
  },
  methods: {
    setComponentIsMoving(index, event) {
      const el = this.$refs.componentsRef[index].$el;
      this.components[index].dragStartElementCord.x =
        event.clientX - el.getBoundingClientRect().left;
      this.components[index].dragStartElementCord.y =
        event.clientY - el.getBoundingClientRect().top;
      this.components.forEach((component, index) => {
        const el = this.$refs.componentsRef[index].$el;
        el.style.left = `${el.getBoundingClientRect().left}px`;
        el.style.top = `${el.getBoundingClientRect().top}px`;
        this.components[index].isAbsolutePosition = true;
      });
      this.components[index].isMoving = true;
      function mousemoveEventFunction(event) {
        if (this.component.isMoving) {
          this.el.style.left = `${
            event.clientX - this.component.dragStartElementCord.x
          }px`;
          this.el.style.top = `${
            event.clientY - this.component.dragStartElementCord.y
          }px`;
        }
      }
      this.$refs.componentFrame.addEventListener("mousemove", {
        handleEvent: mousemoveEventFunction,
        el: this.$refs.componentsRef[index].$el,
        component: this.components[index],
      });
      function mouseupEventFunction() {
        this.component.isMoving = false;
        this.component.dragStartElementCord.x = null;
        this.component.dragStartElementCord.y = null;
      }
      this.$refs.componentFrame.addEventListener("mouseup", {
        handleEvent: mouseupEventFunction,
        component: this.components[index],
      });
    },
    showComponent(index) {
      const el = this.$refs.componentsRef[index].$el;
      el.style.left = `${this.components[index].dragBeforeHideElementCord.x}px`;
      el.style.top = `${this.components[index].dragBeforeHideElementCord.y}px`;
      this.components[index].isHidden = false;
    },
    pushComponent() {
      this.components.push({ text: "New", isMoving: false });
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
