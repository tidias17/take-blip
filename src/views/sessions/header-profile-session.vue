<template>
  <section>
    <div class="wrapper-name">
      <avatar icon="blip" />
      <p>
        {{data.name}}
        <br>
        <span>
          {{data.shortName}}
        </span>
      </p>
    </div>
    <p class="info-created">
      Created at {{data.created | formatDate}}
    </p>
  </section>
</template>

<script>
export default {
  name: 'header-profile-session',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  section
    width: 100%
    height: 120px
    display: flex
    justify-content: space-between
    align-items: center
    .wrapper-name
      width: calc(100% - 150px)
      display: flex
      p
        font-size: 24px
        font-weight: 700
        line-height: 1
        color: $grey-600
        span
          font-size: 14px
          font-weight: 400
          color: $grey-400
    .info-created
      width: 150px
      font-size: 14px
      color: $grey-400
</style>
