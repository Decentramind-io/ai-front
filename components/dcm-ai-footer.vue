<template>
<div class="dcm-ai-footer">
  <div class="centralizer">
    <nuxt-link to="/#top" class="top-link" @click.native.prevent="scrollToTop">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00039 15.9998C7.71706 15.9998 7.47972 15.9038 7.28839 15.7118C7.09639 15.5205 7.00039 15.2831 7.00039 14.9998V3.8248L2.12539 8.6998C1.92539 8.8998 1.68772 8.9998 1.41239 8.9998C1.13772 8.9998 0.90039 8.8998 0.70039 8.6998C0.50039 8.4998 0.400391 8.26647 0.400391 7.9998C0.400391 7.73314 0.50039 7.4998 0.70039 7.2998L7.30039 0.699804C7.40039 0.599804 7.50872 0.528804 7.62539 0.486804C7.74206 0.445471 7.86706 0.424805 8.00039 0.424805C8.13372 0.424805 8.26306 0.445471 8.38839 0.486804C8.51306 0.528804 8.61706 0.599804 8.70039 0.699804L15.3004 7.2998C15.5004 7.4998 15.6004 7.73314 15.6004 7.9998C15.6004 8.26647 15.5004 8.4998 15.3004 8.6998C15.1004 8.8998 14.8627 8.9998 14.5874 8.9998C14.3127 8.9998 14.0754 8.8998 13.8754 8.6998L9.00039 3.8248V14.9998C9.00039 15.2831 8.90472 15.5205 8.71339 15.7118C8.52139 15.9038 8.28372 15.9998 8.00039 15.9998Z" fill="white"/>
      </svg>
    </nuxt-link>
    <span class="copyright">&copy;&nbsp;DECENTRAMIND&nbsp;|&nbsp;2023</span>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.dcm-ai-footer
  @media mq-desktop
    height px2vw1920(353)
    padding-top px2vw1920(164)

    > .centralizer
      width px2vw1920(1720)
      margin 0 auto
      padding-left px2vw1920(10)
      position relative
      overflow hidden

      > .copyright
        margin-top px2vw1920(22)
        display block
        font-size px2vw1920(16)
        line-height px2vw1920(21)

      > .top-link
        text-decoration none
        float right
        margin-right px2vw1920(12)
        width px2vw1920(60)
        height px2vw1920(60)
        background #1E5F72
        border 1px solid #38F8F9
        border-radius px2vw1920(5)
        
        display flex
        flex-direction column
        align-items center
        justify-content center

        > svg
          width px2vw1920(16)
          height px2vw1920(16)
  
  @media mq-mobile
    > .centralizer
      height px2vw375(180)
      position relative
      border 1px solid transparent
      
      > .copyright
        position absolute
        font-size px2vw375(14)
        line-height px2vw375(18)
        text-align center
        bottom px2vw375(35)
        width 100%

      > .top-link
        text-decoration none
        margin px2vw375(35) auto 0
        width px2vw375(60)
        height px2vw375(60)
        background #1E5F72
        border 1px solid #38F8F9
        border-radius px2vw375(5)
        
        display flex
        flex-direction column
        align-items center
        justify-content center
        
        > svg
          width px2vw375(15)
          height px2vw375(15)

</style>
