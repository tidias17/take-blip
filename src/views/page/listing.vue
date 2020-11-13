<template>
  <section class="content-general">
    <header-listing-session />
    <list-session :previewList="previewList" />
    <fab />
  </section>
</template>

<script>
import listExternal from '../../assets/resources/data.json';

export default {
  name: 'listing-view',
  data() {
    return {
      list: listExternal,
      previewList: false,
    };
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .content-general
    padding: 0 60px
    min-height: calc(100vh - 52px - 80px)
</style>
