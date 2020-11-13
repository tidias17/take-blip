<template>
  <header class="global-box">
    <img src="../../assets/images/icons/logo.png" />
  </header>
</template>

<script>
export default {
  name: 'header-session',
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  header
    width: 100%
    height: 52px
    padding: 0
    display: flex
    justify-content: center
    align-items: center
    background-color: $grey-900
</style>
