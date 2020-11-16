<template>
  <section class="wrapper-cards">
    <card
      v-for="(item, index) in list"
      :key="index"
      width15
      :previewList="previewList"
    >
      <section slot="content" class="content-card">
        <div class="space-star">
          <img src="../../assets/images/icons/favorite.png" >
        </div>
        <div class="space-image" :style="`background-image: url(${item.image})`" />
        <p class="space-name">
            {{item.name}}
          <br>
          <span>
            {{item.shortName}}
          </span>
        </p>
        <p class="space-date">
          Created at {{item.created | formatDate}}
        </p>
      </section>
    </card>
  </section>
</template>

<script>
export default {
  name: 'others-items-session',
  props: {
    previewList: {
      type: Boolean,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      image: 'data:image/jpeg;base64,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',
    };
  },
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .wrapper-cards
    width: 100%
    margin-top: 32px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
</style>
