<template>
  <div class="wrapper-content-profile">
    <section class="wrapper-cards">
      <card width35>
        <div slot="content" class="content-card">
          Region
        </div>
      </card>
      <card width65 spaceLeft>
        <div slot="content" class="content-card">
          Usuários
        </div>
      </card>
      <card width50>
        <div slot="content" class="content-card">
          Mensagens Recebidas
        </div>
      </card>
      <card width50 spaceLeft>
        <div slot="content" class="content-card">
          Mensagens Enviadas
        </div>
      </card>
    </section>
    <section class="contant-info-account">
      <img src="../../assets/images/icons/plano.png" >
      <p>
        Status account<br>
        {DADO}
      </p>
      <btn description="Update account" small />
    </section>
  </div>
</template>

<script>
export default {
  name: 'wrapper-content-session',
};
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"
  .wrapper-content-profile
    width: 100%
    display: flex
    margin-top: 28px
    .wrapper-cards
      width: 70%
      display: flex
      flex-wrap: wrap
      justify-content: space-between
    .contant-info-account
      width: 30%
      padding-left: 28px
      display: flex
      flex-wrap: wrap
      justify-content: center
      align-items: center
      margin-bottom: 28px
      p
        width: 100%
        text-align: center
</style>
