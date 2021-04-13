<template>
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from "../src/layouts/nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
