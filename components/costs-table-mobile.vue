<template>
<div class="costs-table-mobile">
  
  <div class="cost" v-for="(c, i) in costs" :key="i">
    
    <div class="key name">
      <strong>GPU</strong>
    </div>
    <div class="value">{{ c[0] }}</div>

    <div class="key power">
      <strong>Mh/s</strong><span>ethash</span>
    </div>
    <div class="value">{{ c[1] }}</div>

    <div class="key cost">
      <strong>Cost*</strong><span>or rent per 1 hour, $</span>
    </div>
    <div class="value">{{ c[2] }}</div>
    
  </div>
  
</div>
</template>

<script>
export default {
  computed: {
    costs () {
      return [
        ['Nvidia GeForce GTX1070 Ti', 25, 0.0625],
        ['Nvidia GeForce RTX2070', 40, 0.1],
        ['Nvidia GeForce RTX3070', 60, 0.15],
        ['Nvidia GeForce RTX3080', 100, 0.25],
        ['Nvidia GeForce RTX3090', 120, 0.30],
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.costs-table-mobile
  margin-left px2vw375(-15)
  margin-right px2vw375(-15)
  padding-left px2vw375(15)
  padding-right px2vw375(15)
  background-image linear-gradient(95.01deg, #0F0D29 -9.75%, rgba(30, 55, 83, 0.7) 31.16%, #020D24 96.7%)
  > .cost
    padding-top px2vw375(18)
    &:first-child
      padding-top px2vw375(28)
    > .key
      padding-bottom px2vw375(8)
      border-bottom 1px solid rgba(56, 248, 249, 0.17)
      > strong
        display inline-block
        font-weight 700
        font-size px2vw375(24)
        line-height px2vw375(31)
      > span
        display inline-block
        font-size px2vw375(14)
        line-height px2vw375(18)
        margin-left px2vw375(12)
        opacity .59

      &.cost
        > span
          margin-left px2vw375(4)
    > .value
      padding-top px2vw375(7)
      font-size px2vw375(16)
      line-height px2vw375(21)
      padding-bottom px2vw375(25)

            
</style>
