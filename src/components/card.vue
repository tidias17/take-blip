<template>
  <div
    class="card"
    :class="{
      'width10': width10,
      'width15': width15,
      'width20': width20,
      'width30': width30,
      'width35': width35,
      'width40': width40,
      'width45': width45,
      'width50': width50,
      'width55': width55,
      'width60': width60,
      'width65': width65,
      'width70': width70,
      'width80': width80,
      'width90': width90,
      'space-left': spaceLeft,
      'preview-list': preview !== 'block',
    }"
  >
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    preview: {
      type: String,
      required: true,
    },
    width10: {
      type: Boolean,
      default: false,
    },
    width15: {
      type: Boolean,
      default: false,
    },
    width20: {
      type: Boolean,
      default: false,
    },
    width30: {
      type: Boolean,
      default: false,
    },
    width35: {
      type: Boolean,
      default: false,
    },
    width40: {
      type: Boolean,
      default: false,
    },
    width45: {
      type: Boolean,
      default: false,
    },
    width50: {
      type: Boolean,
      default: false,
    },
    width55: {
      type: Boolean,
      default: false,
    },
    width60: {
      type: Boolean,
      default: false,
    },
    width65: {
      type: Boolean,
      default: false,
    },
    width70: {
      type: Boolean,
      default: false,
    },
    width80: {
      type: Boolean,
      default: false,
    },
    width90: {
      type: Boolean,
      default: false,
    },
    spaceLeft: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../assets/sass/main.sass"
  .card
    width: 100%
    height: 180px
    background-color: $white
    border-radius: 6px
    box-shadow: 1px 1px 4px 0px $grey-400
    margin-bottom: 28px
    .content-card
      display: flex
      flex-wrap: wrap
      justify-content: center
      align-items: center
      padding: 20px 8px
      height: 100%
      position: relative
    &.width10
      width: 10%
      &.space-left
        width: calc(10% - 28px)
    &.width15
      width: 15%
      &.space-left
        width: calc(15% - 28px)
    &.width20
      width: 20%
      &.space-left
        width: calc(20% - 28px)
    &.width30
      width: 30%
      &.space-left
        width: calc(30% - 28px)
    &.width35
      width: 35%
      &.space-left
        width: calc(35% - 28px)
    &.width40
      width: 40%
      &.space-left
        width: calc(40% - 28px)
    &.width45
      width: 45%
      &.space-left
        width: calc(45% - 28px)
    &.width50
      width: 50%
      &.space-left
        width: calc(50% - 28px)
    &.width55
      width: 55%
      &.space-left
        width: calc(55% - 28px)
    &.width60
      width: 60%
      &.space-left
        width: calc(60% - 28px)
    &.width65
      width: 65%
      &.space-left
        width: calc(65% - 28px)
    &.width70
      width: 70%
      &.space-left
        width: calc(70% - 28px)
    &.width80
      width: 80%
      &.space-left
        width: calc(80% - 28px)
    &.width90
      width: 90%
      &.space-left
        width: calc(90% - 28px)
    &.space-left
      margin-left: 28px
</style>
