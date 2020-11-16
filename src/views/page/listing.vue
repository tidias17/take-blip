<template>
  <section class="content-general">
    <header-listing-session />
    <list-session :previewList="previewList" :list="listOthers" :listFavorities="listFavorities" />
    <fab />
  </section>
</template>

<script>
import listExternal from '../../assets/resources/data.json';

export default {
  name: 'listing-view',
  data() {
    return {
      listOthers: listExternal,
      listFavorities: [],
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
    this.$bus.$on('favoritieBoot', (value) => {
      this.favoritieBoot(value);
    });
    this.$bus.$on('unfavoritieBoot', (value) => {
      this.unfavoritieBoot(value);
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
      this.$Class.common.orderAbc(this.listOthers, 'name').then((data) => {
        this.listOthers = data;
      });
      this.$Class.common.orderAbc(this.listFavorities, 'name').then((data) => {
        this.listFavorities = data;
      });
    },
    orderCreation() {
      this.$Class.common.orderAbc(this.listOthers, 'created').then((data) => {
        this.listOthers = data;
      });
      this.$Class.common.orderAbc(this.listFavorities, 'created').then((data) => {
        this.listFavorities = data;
      });
    },
    favoritieBoot(value) {
      this.listFavorities.push(value);
      this.listOthers = this.listOthers.filter((item) => item !== value);
    },
    unfavoritieBoot(value) {
      this.listOthers.push(value);
      this.listFavorities = this.listFavorities.filter((item) => item !== value);
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
