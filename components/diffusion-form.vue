<template>
<div class="diffusion-form">
  <div class="centralizer">
    <div class="image">
      <img :src="imageUrl">
    </div>
    <form @submit.prevent="handleFormSubmit">
      <h2>Looking for cutting-edge computational power? Decentramind has you covered.</h2>
      <p>It’s only a couple of clicks away.</p>
      <textarea :disabled="isInProgress" class="text-seed" v-model="prompt" placeholder="prompt"></textarea>
      
      <textarea v-if="advancedMode" :disabled="isInProgress" class="text-seed" v-model="negativePrompt" placeholder="negative prompt"></textarea>
      <div class="advanced-mode-toggler" v-else @click="advancedMode = true">Σ</div>
      
      <button :disabled="isInProgress">
        <span class="label">{{ buttonLabel  }}</span>
        <span v-if="isInProgress"
          class="progress-indicator"
          :style="{ width: progressPercentage + '%' }"
        />
      </button>
    </form>
  </div>
</div>
</template>

<script>
const INITIAL = 0
const WAITING = 1
const READY = 2
const POLLING_TIMEOUT_MS = 3000

export default {
  data () {
    return {
      prompt: "Sacred forest on an unknown planet",
      advancedMode: false,
      negativePrompt: "",
      sessionId: null,
      status: INITIAL,
      queueLength: 0,
      positionInQueue: 0,
      maxPositionInQueue: 0,
      newQuery: true,
      prevImageUrl: null,
    }
  },

  computed: {
    imageUrl () {
      if (this.status !== READY) {
        return this.prevImageUrl || "/diffusion-example.png"
      }
      return `https://megamind.network/sd/${this.sessionId}`
    },
    isInProgress () {
      return this.status === WAITING
    },
    progressPercentage () {
      return (
        this.positionInQueue <= 0 ?
          100
          : Math.round(
            100 * (this.maxPositionInQueue - this.positionInQueue) /
            this.maxPositionInQueue)
      )
    },
    buttonLabel () {
      return this.isInProgress ?
        this.positionInQueue ?
          // `Waiting: ${this.progressPercentage}% (${this.positionInQueue}/${this.maxPositionInQueue} in queue)`
          `Queued #${this.positionInQueue}/${this.maxPositionInQueue}, ${this.progressPercentage}%`
          : 'Generating...'
        : 'Generate Image'
    }
  },

  methods: {
    handleFormSubmit () {
      if (this.status === WAITING) {
        return
      }
      if (this.status === READY) {
        this.prevImageUrl = this.imageUrl
      }
      this.status = WAITING
      this.newQuery = true
      this.$axios.post('/generate', {
        prompt: this.prompt,
        negative_prompt: this.negativePrompt,
        cfg_scale: 7,
        sampling_steps: 20
      }).then(result => {
        this.sessionId = result.data.session_id
        this.pollStatus()
      }).catch(error => {
        console.error(error)
        this.status = INITIAL
      })
    },

    pollStatus () {
      if (this.status === READY || !this.sessionId) {
        return
      }
      this.$axios.get(`/status/${this.sessionId}`
      ).then(result => {
        switch (result.data.status) {
          case 'ready':
            this.status = READY
            break
          case 'failed':
            this.status = FAILED
            break
          default:
            if (this.newQuery) {
              this.maxPositionInQueue = Math.max(0, result.data.queued_before_me)
              this.newQuery = false
            }
            this.status = WAITING
            this.queueLength = result.data.queue_length
            this.positionInQueue = Math.max(0, result.data.queued_before_me)
            setTimeout(this.pollStatus, POLLING_TIMEOUT_MS)
        }
      }).catch(error => {
        console.error(error)
        this.status = INITIAL
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~/assets/mixins.styl'

.diffusion-form  

  .advanced-mode-toggler
    width 2em
    opacity 0
    cursor pointer
    color rgba(121, 130, 155, 1)
    font-size px2vw1920(14)
    line-height px2vw1920(18)
    padding-left px2vw1920(17)

  button
    position relative
    overflow hidden
    > .progress-indicator
      z-index 1
      display block
      background-color #38F8F966
      position absolute
      left 0
      top 0
      bottom 0
    > .label
      display block
      position relative
      z-index 2

  @media mq-desktop
    > .centralizer
      width px2vw1920(1720)
      margin 0 auto
      padding-left px2vw1920(10)
      position relative
      overflow hidden

      h2
        margin-top px2vw1920(42)
        

        width px2vw1920(525)
        height px2vw1920(96)

        font-weight 700
        font-size px2vw1920(32)
        line-height 100%
        text-transform uppercase

      p      
        width px2vw1920(525)
        margin-top px2vw1920(24)
        height px2vw1920(26)
        margin-bottom px2vw1920(85)

        font-size px2vw1920(20)
        line-height px2vw1920(26)

      textarea
        background transparent
        border 1px solid rgba(56, 248, 249, 0.2)
        color rgba(121, 130, 155, 1)
        padding px2vw1920(17) px2vw1920(23)
        font-size px2vw1920(14)
        line-height px2vw1920(18)
        letter-spacing 0em
        text-align left

        resize none
        width px2vw1920(371)
        height px2vw1920(100)

        border 1px solid rgba(56, 248, 249, 0.2)
        border-radius px2vw1920(10)

        &[disabled]
          opacity .2
          cursor progress

      button
        display block
        margin-top px2vw1920(27)
        padding px2vw1920(11) px2vw1920(23)

        min-width px2vw1920(156)
        height px2vw1920(45)

        background #1E5F72
        border 1px solid #38F8F9
        border-radius px2vw1920(30)
        color #fff

        font-size px2vw1920(16)
        line-height px2vw1920(21)

        text-align center
        
        cursor pointer

        opacity 0.9

        &:hover
          opacity 1.0

        &[disabled]
          // opacity .2
          cursor progress

      .image
        width px2vw1920(946)
        height px2vw1920(516)
        float right
        margin-right px2vw1920(64)
        top 0
        border-radius px2vw1920(15)
        overflow hidden
        > img
          width auto
          height 100%
          float right
          

  @media mq-mobile
    > .centralizer
      padding px2vw375(20) px2vw375(15) px2vw375(480) px2vw375(15)
      position relative

      h2
        font-size px2vw375(28)
        line-height 100%
        text-align center
        text-transform uppercase

      p      
        font-size px2vw375(16)
        line-height px2vw375(21)
        text-align center
        margin-top px2vw375(25)
        margin-bottom px2vw375(28)

      textarea
        background transparent
        border 1px solid #38F8F9
        border-radius px2vw1920(30)
        color #fff

        font-size px2vw375(14)
        line-height px2vw375(18)
        padding px2vw375(18) px2vw375(24)
        width 100%
        resize none
        min-height px2vw375(100)

        &[disabled]
          opacity .2
          cursor progress

      button
        margin-top px2vw375(13)

        width 100%
        background #1E5F72
        border 1px solid #38F8F9
        border-radius px2vw375(30)
        color #fff

        padding px2vw375(12)
        font-size px2vw375(16)
        line-height px2vw375(21)

        text-align center

        &[disabled]
          // opacity .2
          cursor progress

      .image
        position absolute
        bottom px2vw375(80)
        left 0
        right 0
        // border-radius px2vw375(12)
        overflow hidden
        > img
          width 100%
          height auto
</style>
