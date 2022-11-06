<template>
  <the-sidebar />
</template>

<script>
import TheSidebar from "/src/components/TheSidebar.vue";
export default {
  name: "view_name_index",
  components: {
    TheSidebar,
  },
  data: () => ({
    msg: "text",
  }),
};
</script>
