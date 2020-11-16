<template>
  <section class="global-box">
    <h2>
      My chatbots
    </h2>
    <div class="wrapper-content-header-listing">
      <input type="text" v-model="searchInput" @input="filterString">
      <btn description="Order by name" small @click.native="orderName" />
      <btn description="Order by creation" medium @click.native="orderCreation" />
      <btn-icon icon="organize-blocks" small @click.native="changeDisplayBlock" />
      <btn-icon icon="organize-list" small  @click.native="changeDisplayList"  />
    </div>
  </section>
</template>

<script>
export default {
  name: 'header-listing-session',
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    changeDisplayBlock() {
      this.$bus.$emit('changeDisplayBlock');
    },
    changeDisplayList() {
      this.$bus.$emit('changeDisplayList');
    },
    orderName() {
      this.$bus.$emit('orderName');
    },
    orderCreation() {
      this.$bus.$emit('orderCreation');
    },
    filterString() {
      this.$bus.$emit('filterString', this.searchInput);
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  section
    width: 100%
    height: 100px
    display: flex
    justify-content: space-between
    align-items: center
    .wrapper-content-header-listing
      display: flex
      button
        margin-left: 12px
</style>
