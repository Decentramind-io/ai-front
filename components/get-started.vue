<template>
<div class="costs">
  <div class="centralizer">
    <h2>How do I get started?</h2>

    <div class="palette">
      
      <nuxt-link to="">
        <span>Register on our website</span>
      </nuxt-link>
      
      <nuxt-link to="">
        <span>Make a deposit to top up your credits</span>
      </nuxt-link>

      <nuxt-link to="">
        <span>Select an existing algorithm at the marketplace or create your own</span>
      </nuxt-link>

      <nuxt-link to="">
        <span>Select a machine by specifying the desired characteristics. The platform will help you find what you need</span>
      </nuxt-link>

      <nuxt-link to="">
        <span>During the processing, credits will be taken from your balance. If your credits run out, the instance is suspended. If the balance is not replenished within a day, the lease is terminated and the container is removed</span>
      </nuxt-link>

      <nuxt-link to="">
        <span>Any remaining credits can be withdrawn as desired</span>
      </nuxt-link>

    </div>

    <div class="details">
      <p>Go ahead and <a href="https://decentramind.io/auth/signup">register now</a>, it’s absolutely free. Once connected, we invite you to take a look at our highly customisable offers.</p>
      <p class="note">You can also rent your computing modules out if you want to.</p>
    </div>
    
    <div class="buttons">
      <a href="https://decentramind.io/auth/signup#miner">Buy hash power</a>
      <a href="https://decentramind.io/auth/signup#owner">Rent out hash power</a>
    </div>

  </div>
</div>
</template>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.costs
  > .centralizer
    > .palette
      > a
        &:nth-child(1)
          background-image url('/bgs/1.png')
        &:nth-child(2)
          background-image url('/bgs/2.png')
        &:nth-child(3)
          background-image url('/bgs/3.png')
        &:nth-child(4)
          background-image url('/bgs/4.png')
        &:nth-child(5)
          background-image url('/bgs/5.png')
        &:nth-child(6)
          background-image url('/bgs/6.png')

  @media mq-desktop
    > .centralizer
      width px2vw1920(1720)
      margin 0 auto
      padding-left px2vw1920(10)
      position relative
      overflow hidden
      position relative

      > h2
        font-weight 700
        font-size px2vw1920(64)
        line-height 100%
        text-transform uppercase
        margin-bottom px2vw1920(166)

      > .palette
        float right
        width px2vw1920(999)
        display flex
        flex-direction row
        flex-wrap wrap
        justify-content space-between
        margin-right px2vw1920(12)
        > a
          display block
          width px2vw1920(321)
          height px2vw1920(311)
          overflow hidden
          margin-bottom px2vw1920(19)
          border 1px solid #38F8F9
          border-radius px2vw1920(14)
          color #fff
          text-decoration none
          position relative
          > span
            font-size px2vw1920(16)
            line-height px2vw1920(20.7)
            position absolute
            left px2vw1920(32)
            right px2vw1920(32)
            bottom px2vw1920(32)

      > .details
        margin-top px2vw1920(-5)
        padding-left px2vw1920(76)
        
        > p
          width px2vw1920(478)
          font-size px2vw1920(20)
          line-height px2vw1920(25.88)

          > a
            color #fff
            text-decoration underline

          &.note
            width px2vw1920(437)
            font-size px2vw1920(14)
            line-height px2vw1920(17)
            position absolute
            bottom px2vw1920(109)
            left px2vw1920(88)

      > .buttons
        position absolute
        bottom px2vw1920(17)
        left px2vw1920(88)
        > a
          display inline-block
          text-decoration none

          margin-top px2vw1920(1)
          margin-right px2vw1920(20)
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
      padding px2vw375(80) px2vw375(15) px2vw375(20) px2vw375(15)
      position relative
      
      > h2
        font-size px2vw375(24)
        line-height px2vw375(31)
        text-transform uppercase
        margin-bottom px2vw375(39)

      > .palette
        height px2vw375(1255)
        margin-top px2vw375(134)
        > a
          display block
          border 1px solid #38F8F9
          border-radius px2vw375(14)
          height px2vw375(200)
          margin-bottom px2vw375(15)
          position relative
          color #fff
          > span
            position absolute
            bottom px2vw375(32)
            left px2vw375(24)
            right px2vw375(59)
            font-size px2vw375(14)
            line-height px2vw375(18)

      > .details
        
        > p
          font-size px2vw375(16)
          line-height px2vw375(21)
          position absolute
          top px2vw375(150)
          left px2vw375(15)
          right px2vw375(15)

          > a
            color #fff
            text-decoration underline

          &.note
            position absolute
            top auto
            bottom px2vw375(185)
            left px2vw375(15)
            right px2vw375(15)
            color #819BC7
            font-size px2vw375(16)
            line-height px2vw375(18)
            width px2vw375(300)

      > .buttons
        margin-top px2vw375(116)
        
        > a
          display block
          margin-top px2vw375(15)
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
