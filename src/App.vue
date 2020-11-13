<template>
  <div class="content-general">
    <header-session />
    <router-view />
    <footer-session />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route(to) {
      document.title = to.meta.title || 'Take Blip - Contatos Inteligentes';
    },
  },
};
</script>

<style lang="sass">
  @import "./assets/sass/main.sass"
</style>
