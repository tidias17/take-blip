<template>
  <section class="global-box">
    <header-profile-session :data="data" />
    <division-line />
    <wrapper-content-session :data="data" />
  </section>
</template>

<script>
export default {
  name: 'profile-view',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {

    };
  },
  mounted() {
    if (this.data === undefined) {
      this.$router.push({ path: 'listing' });
    }
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .global-box
    padding: 0 60px
    min-height: calc(100vh - 52px - 80px)
</style>
