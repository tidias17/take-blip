<template>
  <section class="content-general">
    <header-listing-session />
    <list-session :previewList="previewList" :list="list" />
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
  mounted() {
    this.$bus.$on('changeDisplayList', () => {
      this.changeDisplayList();
    });
    this.$bus.$on('changeDisplayBlock', () => {
      this.changeDisplayBlock();
    });
    this.$bus.$on('orderName', () => {
      this.orderName();
    });
    this.$bus.$on('orderCreation', () => {
      this.orderCreation();
    });
  },
  methods: {
    changeDisplayList() {
      this.previewList = true;
    },
    changeDisplayBlock() {
      this.previewList = false;
    },
    orderName() {
      this.$Class.common.orderAbc(this.list, 'name').then((data) => {
        this.list = data;
      });
    },
    orderCreation() {
      this.$Class.common.orderAbc(this.list, 'created').then((data) => {
        this.list = data;
      });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .content-general
    padding: 0 60px
    min-height: calc(100vh - 52px - 80px)
</style>
