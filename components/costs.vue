<template>
<div class="costs">
  <div class="centralizer">
    <h2>How much does <br>it cost?</h2>

    <costs-table/>
    <costs-table-mobile/>

    <div class="details">
      <p>You can get started with as little as $1 for basic tasks, and as an advanced user you’ll find that our rates are very competitive, up to 25% cheaper than other actors in the field.</p>
      <p class="note">*Prices may vary depending on market conditions.<br>Our platform always keeps you up-to-date on the current rates.</p>
    </div>

  </div>
</div>
</template>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.costs
  @media mq-desktop
    margin-bottom px2vw1920(125)
    
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

      > .costs-table
        float right
        margin-right px2vw1920(10)
        margin-top px2vw1920(110)

      > .costs-table-mobile
        display none

      > .details
        padding-top px2vw1920(104)
        padding-left px2vw1920(76)
        
        > p
          width px2vw1920(478)
          font-size px2vw1920(20)
          line-height px2vw1920(25.88)

          &.note
            width px2vw1920(437)
            font-size px2vw1920(16)
            line-height px2vw1920(20.7)
            position absolute
            bottom 0
  
  @media mq-mobile
    
    > .centralizer
      padding px2vw375(16) px2vw375(15) px2vw375(7) px2vw375(15)
      position relative
      
      > h2
        text-transform uppercase
        font-size px2vw375(24)
        line-height px2vw375(24)
        margin-bottom px2vw375(40)
        > br
          display none

      > .costs-table
        display none

      > .costs-table-mobile
        margin-top px2vw375(285)

      > .details
        position absolute
        top px2vw375(80)
        padding-right px2vw375(15)
        
        > p
          font-size px2vw375(16)
          line-height px2vw375(21)
          
          &.note
            margin-top px2vw375(23)
            font-size px2vw375(14)
            line-height px2vw375(18)
            color #a3a3a3
</style>
