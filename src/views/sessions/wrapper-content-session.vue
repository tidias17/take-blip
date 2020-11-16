<template>
  <div class="wrapper-content-profile">
    <section class="wrapper-cards">
      <card width35>
        <div slot="content" class="content-card region">
          <p>
            Region and idiom
          <br>
            {{data.culture}}
          </p>
          <p>
            Timezone
          <br>
            {{data.culture}}
          </p>
        </div>
      </card>
      <card width65 spaceLeft>
        <div slot="content" class="content-card sent">
          <avatar icon="user" background="blue" />
          <p>
            <span>
              {{data.analytics.user.actived}}
            </span>
          <br>
            Usuários ativos
          </p>
        </div>
      </card>
      <card width50>
        <div slot="content" class="content-card sent">
          <avatar icon="sent" background="green" />
          <p>
            <span>
              {{data.analytics.message.received | formatNumber}}
            </span>
            <br>
            Mensagens recebidas
          </p>
        </div>
      </card>
      <card width50 spaceLeft>
        <div slot="content" class="content-card sent">
          <avatar icon="sent" background="purpe" />
          <p>
            <span>
              {{data.analytics.message.sent | formatNumber}}
            </span>
          <br>
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
      .region
        padding: 32px
        p
          width: 100%
          color: $grey-700
          font-size: 14px
      .sent
        display: flex
        justify-content: flex-start
        padding: 32px
        p
          text-align: left
          color: $grey-700
          font-size: 14px
          span
            font-size: 26px
            font-weight: 700
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
