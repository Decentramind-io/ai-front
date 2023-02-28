<template>
<div class="costs-table">
  <table border="1">
    <thead>
      <tr>
        <th><strong>GPU</strong></th>
        <th><strong>Mh/s</strong><span>ethash</span></th>
        <th><strong>Cost*</strong><span>or rent per 1 hour, $</span></th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="(c, i) in costs" :key="i">
        <td>{{ c[0] }}</td>
        <td>{{ c[1] }}</td>
        <td>{{ c[2] }}</td>
      </tr>
    </tbody>
  </table>
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

.costs-table
  padding px2vw1920(50) px2vw1920(105) px2vw1920(50) px2vw1920(73)
  width px2vw1920(1000)
  height px2vw1920(500)
  background linear-gradient(95.01deg, #0F0D29 -9.75%, rgba(30, 55, 83, 0.7) 31.16%, #020D24 96.7%)
  border-radius px2vw1920(20)

  > table
    border-collapse collapse
    border 1px solid transparent 
    width 100%
    height px2vw1920(390)
    > thead
      > tr
        > th
          text-align left
          border-bottom-color #38F8F9
          height px2vw1920(80)
          vertical-align top
          > strong
            display block
            font-size px2vw1920(28)
            line-height px2vw1920(36)
          > span
            display block
            font-size px2vw1920(18)
            line-height px2vw1920(23)
    > tbody
      > tr
        > td
          font-size px2vw1920(20)
          line-height px2vw1920(25.88)
          &:first-child
            width px2vw1920(454)
            padding-left px2vw1920(2)
          &:nth-child(3)
            width px2vw1920(172)

        &:first-child
          > td
            padding-top px2vw1920(21)
            
</style>
