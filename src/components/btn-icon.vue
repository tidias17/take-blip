<template>
    <button class="button-icon">
      <img :src="getImage(icon)" />
    </button>
</template>

<script>
export default {
  name: 'btn-icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
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
  .button-icon
    height: 34px
    display: flex
    align-items: center
    justify-content: center
    color: $white
    font-weight: 600
    cursor: pointer
    background-color: transparent
    border: none
    border-radius: 6px
    text-transform: initial
    font-size: 14px
    padding: 0
    &:hover
      opacity: .8
</style>
