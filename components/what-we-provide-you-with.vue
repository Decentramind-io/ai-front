<template>
<div class="what-we-provide-you-with">
  <div class="centralizer">
    <h2>What can we provide<br>you with?</h2>

    <div class="image">
      <img src="/cube-1.png" class="cube-1">
      <img src="/cube-2.png" class="cube-2">
      <img src="/cube-3.png" class="cube-3">
    </div>

    <div class="details">
      <p>Are you looking for AI-based solutions and need sustainable computing power? We can assist you in the fast and seamless migration of your existing projects to take full advantage of our platform.</p>
      <p>You can boost your own project or connect to our library of powerful algorithms. With the capabilities of powerful high-end GPUs combined with our flexible API you’ll soon be all set.</p>
      <p class="caps">This is a perfect moment to hop on board and let us be your partners on this exciting new path!</p>
    </div>

    <div class="scheme"/>

  </div>
</div>
</template>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.what-we-provide-you-with

  @media mq-desktop
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

      > .image
        float right
        width px2vw1920(640)
        height px2vw1920(624)
        margin-right px2vw1920(170)
        margin-top px2vw1920(-100)
        position relative
        > img
          position absolute
          &.cube-1
            left px2vw1920(40)
            bottom px2vw1920(30)
            transform rotate(-180deg)
            width px2vw1920(145)

          &.cube-2
            left px2vw1920(24)
            bottom px2vw1920(205)
            transform matrix(1, 0, 0, -1, 0, 0)
            width px2vw1920(233)

          &.cube-3
            right px2vw1920(0)
            top px2vw1920(18)
            width px2vw1920(385)

      > .details
        padding-top px2vw1920(100)
        padding-left px2vw1920(76)
        
        > p
          width px2vw1920(434)
          margin-bottom 1.97em
          font-size px2vw1920(16)
          line-height px2vw1920(22.4)

          &.caps
            width px2vw1920(471)
            text-transform uppercase
            font-size px2vw1920(20)
            padding-top px2vw1920(14)
            line-height px2vw1920(26)

      > .scheme
        width px2vw1920(1203)
        height px2vw1920(515)
        display block
        margin px2vw1920(244.5) auto px2vw1920(200)
        position relative
        left -2px
        background-image url('/scheme.desktop.svg')
        background-repeat no-repeat
        background-size px2vw1920(1203) auto

  @media mq-mobile
    > .centralizer
      padding px2vw375(51) px2vw375(15) px2vw375(600) px2vw375(15)
      position relative

      > h2
        font-size px2vw375(24)
        line-height 100%
        text-transform uppercase
        margin-bottom px2vw375(41)

      > .image
        width 100%
        height px2vw375(350)
        position absolute
        left 0
        right 0
        bottom px2vw375(285)
        > img
          position absolute
          &.cube-1
            left px2vw375(22)
            bottom px2vw375(10)
            transform rotate(-180deg)
            width px2vw375(80)

          &.cube-2
            left px2vw375(15)
            bottom px2vw375(110)
            transform matrix(1, 0, 0, -1, 0, 0)
            width px2vw375(130)

          &.cube-3
            right px2vw375(15)
            top px2vw375(5)
            width px2vw375(218)

      > .details
        
        > p
          font-size px2vw375(14)
          line-height px2vw375(20)
          margin-bottom px2vw375(32)

          &.caps
            text-transform uppercase
            margin-top px2vw375(48)
            font-size px2vw375(16)
            line-height px2vw375(21)

      > .scheme
        position absolute
        bottom px2vw375(58)
        left px2vw375(15)
        right px2vw375(15)
        width px2vw375(345)
        height px2vw375(167)
        background-image url('/scheme.mobile.svg')
        background-repeat no-repeat
        background-size px2vw375(345) auto

</style>
