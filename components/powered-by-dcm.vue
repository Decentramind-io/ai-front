<template>
<a href="https://decentramind.io" target="_blank" class="powered-by-dcm">
  <span class="powered-by">Powered by</span>
  <dcm-logo/>
</a>
</template>

<script>
export default {

}
</script>


<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.powered-by-dcm
  display block

  @media mq-desktop
    height px2vw1920(335)
    width px2vw1920(389)
    padding-top px2vw1920(68)
    margin 0 auto
    text-align center
    background-color var(--color-back-primary)
    color var(--color-fore-primary)

    > .powered-by
      width px2vw1920(260)
      height px2vw1920(54)

      font-size px2vw1920(45)
      line-height 120%

      text-align center
      text-transform uppercase

    > .dcm-logo
      margin-top px2vw1920(17)
      margin-left px2vw1920(-1)

  @media mq-mobile
    // height px2vw1920(224)
    width px2vw375(224)
    margin 0 auto
    padding px2vw1920(320) 0
    > .powered-by
      display block
      font-size px2vw375(26)
      line-height px2vw375(31)
      text-align center
      text-transform uppercase
      margin-bottom px2vw375(10)

      > .dcm-logo
        width px2vw375(224)

</style>