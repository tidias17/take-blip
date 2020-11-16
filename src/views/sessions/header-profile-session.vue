<template>
  <section>
    <div>
      <p>
        {{data.name}}
        <br>
        <span>
          {{data.shortName}}
        </span>
      </p>
    </div>
    <div>
      <p>
        Created at {{data.created | formatDate}}
      </p>
    </div>
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
</style>
