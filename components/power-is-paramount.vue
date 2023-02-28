<template>
<div class="power-is-paramount">
  <div class="centralizer">
    <h2>Power <br>is paramount</h2>

    <p class="overview">Decentramind provides distributed, high-performance, economical computing resources to develop and maintain your HPC-projects. Take a look at what it can do.</p>

    <div class="image">
      <img src="/paramount.png">
    </div>

    <div class="details">
      <p>In a digital world increasingly dependent on AI-driven systems, deep learning, complex algorithms and forecasts, having access to serious processing power has become crucial for any modern business endeavour in IT.</p>
      <p>Exciting AI-powered developments such as Stable Diffusion generate copyright-free high fidelity images. This comes in handy for anyone interested in creating their own collection of images that could be tokenized.</p>
      <a href="https://decentramind.io">Learn more</a>
    </div>
  </div>
</div>
</template>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.power-is-paramount
  @media mq-desktop
    margin-top px2vw1920(355)
    margin-bottom px2vw1920(163)

    > .centralizer
      width px2vw1920(1720)
      margin 0 auto
      padding-left px2vw1920(10)
      position relative
      overflow hidden

      > h2
        font-weight 700
        font-size px2vw1920(64)
        line-height 100%
        text-transform uppercase

      p
        font-size px2vw1920(18)
        line-height px2vw1920(23)

        &.overview
          width px2vw1920(303)
          float right
          position relative
          right px2vw1920(179)
          top px2vw1920(-12)
          padding-bottom px2vw1920(64)

      > .image
        clear right
        float right
        width px2vw1920(1000)
        height px2vw1920(524)
        margin-right px2vw1920(10)
        > img
          width 100%
          height auto

      > .details
        padding-top px2vw1920(279)
        padding-left px2vw1920(76)
        
        > p
          width px2vw1920(463)
          margin-bottom 2.25em

        > a
          display inline-block
          text-decoration none

          margin-top px2vw1920(1)
          padding px2vw1920(15) px2vw1920(41)

          min-width px2vw1920(181)
          height px2vw1920(58)

          background #1E5F72
          border 1px solid #38F8F9
          border-radius px2vw1920(30)
          color #fff

          font-size px2vw1920(20)
          line-height px2vw1920(26)

          text-align center
          
          cursor pointer

          opacity 0.9

          &:hover
            opacity 1.0

  @media mq-mobile
    
    > .centralizer
      padding px2vw375(20) px2vw375(15) px2vw375(240) px2vw375(15)
      position relative
      
      > h2
        font-size px2vw375(24)
        line-height 100%
        text-align left
        text-transform uppercase
        margin-bottom px2vw375(38)
        > br
          display none

      p
        font-size px2vw375(16)
        line-height px2vw375(21)
        margin-bottom px2vw375(24)

        &.overview
          //

      > .image
        position absolute
        bottom px2vw375(25)
        left px2vw375(15)
        right px2vw375(15)
        overflow hidden
        > img
          width 100%
          height 100%

      > .details
        > p
          font-size px2vw375(14)
          line-height px2vw375(18)

        > a
          display block
          margin-top px2vw375(22)
          text-decoration none

          width 100%
          background #1E5F72
          border 1px solid #38F8F9
          border-radius px2vw375(30)
          color #fff

          padding px2vw375(16)
          font-size px2vw375(20)
          line-height px2vw375(26)

          text-align center
    
</style>
