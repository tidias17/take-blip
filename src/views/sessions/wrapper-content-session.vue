<template>
  <div class="wrapper-content-profile">
    <section class="wrapper-cards">
      <card width35>
        <div slot="content" class="content-card">
          <p>
            Region and idiom
          </p>
          <p>
            {{data.culture}}
          </p>
          <p>
            Timezone
          </p>
          <p>
            {{data.culture}}
          </p>
        </div>
      </card>
      <card width65 spaceLeft>
        <div slot="content" class="content-card">
          <p>
            {{data.analytics.user.actived}}
          </p>
          <p>
            Usuários ativos
          </p>
        </div>
      </card>
      <card width50>
        <div slot="content" class="content-card">
          <p>
            {{data.analytics.message.received | formatNumber}}
          </p>
          <p>
            Mensagens recebidas
          </p>
        </div>
      </card>
      <card width50 spaceLeft>
        <div slot="content" class="content-card">
          <p>
            {{data.analytics.message.sent | formatNumber}}
          </p>
          <p>
            Mensagens enviadas
          </p>
        </div>
      </card>
    </section>
    <section class="contant-info-account">
      <img src="../../assets/images/icons/plano.png" >
      <p>
        Status account<br>
        {{data.plan}}
      </p>
      <btn description="Update account" small />
    </section>
  </div>
</template>

<script>
export default {
  name: 'wrapper-content-session',
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
