<template>
  <div class="layout">
    <nuxt class="ai-site"/>
    <!-- <div class="pp-overlay"/> -->
  </div>
</template>

<style lang="stylus">
@require '~/assets/mixins.styl'

@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

html, body, *
  margin 0
  padding 0
  scroll-behavior smooth
  transition all .2s ease-in-out
  font-family "PT Sans"
  box-sizing border-box

:root
  --color-back-primary #020c25
  --color-back-dark #01091e
  --color-fore-primary white
  --color-accent #00d3d4

a
  color var(--color-fore-primary)
  &:visited
    color var(--color-fore-primary)
  &:active
    color var(--color-fore-primary)
  &:hover
    opacity .95

.ai-site
  // opacity 0.6
  // opacity 1.0
  position relative
  z-index 1
  
  @media mq-desktop
    &::before
      position absolute
      left px2vw1920(-15)
      top px2vw1920(-15)
      content ''
      width px2vw1920(227)
      height px2vw1920(200)
      background-image url('/cube-3.png')
      background-repeat no-repeat
      background-position left top
      background-size px2vw1920(227) auto

  @media mq-mobile
    &::before
      z-index -1
      position absolute
      left px2vw375(-15)
      top px2vw375(-15)
      content ''
      width px2vw375(141)
      height px2vw375(125)
      background-image url('/cube-3.png')
      background-repeat no-repeat
      background-position left top
      background-size px2vw375(141) auto
      transform matrix(-1, 0, 0, 1, 0, 0)

  background-color var(--color-back-primary)
  color var(--color-fore-primary)

.pp-overlay
  position absolute  
  top 0
  left 0
  right 0
  bottom 0
  z-index 0
  
  @media mq-desktop
    background-image url('/ppref/ref.desktop.svg')
    background-size px2vw1920(1920) auto
    width px2vw1920(1920)
    height px2vw1920(5805)

  @media mq-mobile
    background-image url('/ppref/ref.mobile.svg')
    background-size px2vw375(416) auto
    background-position px2vw375(-17) px2vw375(-17)
    width px2vw375(375)
    height px2vw375(6399)

  opacity 0.4
  // display none
</style>
