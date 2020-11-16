<template>
  <router-link :to="destin" class="fab">
    <img src="../assets/images/icons/add.png" >
  </router-link>
</template>

<script>
export default {
  name: 'fab',
  props: {
    destin: {
      type: String,
      default: 'creat',
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../assets/sass/main.sass"
  .fab
    width: 52px
    height: 52px
    background-color: $blue-300
    border-radius: 50%
    position: fixed
    bottom: 24px
    right: 24px
    box-shadow: 1px 1px 4px 0px $grey-400
    display: flex
    justify-content: center
    align-items: center
    img
      transition: all .3s
    &:hover
      opacity: .7
      img
        transform: rotate(90deg)
</style>
