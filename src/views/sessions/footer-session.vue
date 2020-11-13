<template>
  <div class="global-box">
    <division-line />
    <footer>
      <p>
        2019, BLiP Todos os direitos reservados | <span>Termos de Uso</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footer-session',
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .global-box
    padding: 0 60px
  footer
    width: 100%
    height: 80px
    display: flex
    justify-content: center
    align-items: flex-start
    p
      font-size: 12px
      padding-top: 20px
      color: $grey-400
      span
        font-weight: 700
        text-transform: initial
</style>
