<template>
  <section class="content-box">
    <favorites-items-session :previewList="previewList" />
    <division-line />
    <others-items-session :previewList="previewList" />
  </section>
</template>

<script>
export default {
  name: 'list-session',
  props: {
    previewList: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .content-box
</style>
