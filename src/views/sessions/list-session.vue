<template>
  <section class="content-box">
    <favorites-items-session :preview="preview" />
    <division-line />
    <others-items-session :preview="preview" />
  </section>
</template>

<script>
export default {
  name: 'list-session',
  props: {
    preview: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .content-box
</style>
