<template>
    <button class="button-default" :class="{'extra-small': extraSmall, 'small': small,
      'medium': medium, 'full': full}" :disabled="disabled">
      {{description}}
    </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    description: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    extraSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="sass" scoped>
  @import "../assets/sass/main.sass"
  .button-default
    height: 34px
    display: flex
    align-items: center
    justify-content: center
    color: $white
    font-weight: 600
    cursor: pointer
    background-color: $blue-300
    border: none
    border-radius: 6px
    text-transform: initial
    font-size: 14px
    &:hover
      opacity: .8
    &.extra-small
      width: 40px
    &.clen
      height: 24px
    &.small
      width: 126px
    &.medium
      width: 155px
    &.full
      width: 100%
</style>
