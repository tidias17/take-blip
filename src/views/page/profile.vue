<template>
  <section class="global-box">
    <header-profile-session />
    <division-line />
    <wrapper-content-session />
  </section>
</template>

<script>
export default {
  name: 'profile-view',
  data() {
    return {

    };
  },
  mounted() {

  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .global-box
    padding: 0 60px
    min-height: calc(100vh - 52px - 80px)
</style>
