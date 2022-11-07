<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: "component_name_button",
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
.button {
  background: #e254ff;
  padding: 12px 8px;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  &:hover {
    background: #aa00ff;
  }
}
</style>
