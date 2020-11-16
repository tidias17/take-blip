<template>
  <div
    class="wrapper-avatar"
    :class="{
      'default': background === 'default',
      'purpe': background === 'purpe',
      'green': background === 'green',
      'blue': background === 'blue',
    }"
  >
    <img :src="getImage(icon)" />
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    icon: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    getImage(value) {
      /* eslint-disable */
        return require(`../assets/images/icons/${value}.png`);
      /* eslint-enable */
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../assets/sass/main.sass"
  .wrapper-avatar
    width: 52px
    height: 52px
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    margin-right: 16px
    img
      transition: all .3s
    &.default
      background-color: $grey-250
    &.purpe
      background-color: $purpe-300
    &.green
      background-color: $green-300
    &.blue
      background-color: $blue-300
</style>
