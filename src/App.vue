<template>
  <div class="w-full flex flex-col-reverse md:flex-row md:justify-around py-10 px-4 text-center">
      <div class="text-left w-full md:w-1/2 mb-8">
        <h1>
          Munt þú vinna í lottó?<br>
          Verður rigning á morgun?<br>
          Elskar mamma þín þig?
        </h1>
        <h2>Spyrðu mig og ég mun segja þér allt!</h2>
        <div
          class="flex flex-wrap items-center"
          v-if="!questionAsked">
          <input
            v-model="question"
            class="font-custom rounded h-12 w-full md:w-4/5 md:mr-4 p-4 my-4">
          <button
            class="font-custom w-1/2 md:w-1/6"
            @click="submitQuestion"
            :disabled="!question.length">
            Senda
          </button>
        </div>
        <div v-else class="flex w-full flex-wrap">
          <button
            class="w-full md:w-2/5 md:mr-4 my-2"
            @click="submitShakeAgain">
              Glatað svar! Hrista aftur!
            </button>
          <button
            class="w-full md:w-2/5 my-2"
            @click="questionAsked = !questionAsked">
              Nýja spurningu, takk!
            </button>
        </div>
      </div>
      <magic-ball
        class="self-center"
        :class="shaking ? 'shake' : ''"
        :question-asked="questionAsked"
        :shake-again="shakeAgain"/>
  </div>
</template>

<script>

import MagicBall from './components/MagicBall'

export default {
  name: 'App',
  data () {
    return {
      question: '',
      questionAsked: false,
      shakeAgain: false,
      shaking: false,
    }
  },

  components: {
    MagicBall
  },

  methods: {
    submitQuestion () {
      if (!this.question.length) return
      this.shaking = true
      this.questionAsked = !this.questionAsked // Sets the boolean which is passed to the magic ball component to trigger an answer
      this.question = ''
      this.resetShaking()
    },

    submitShakeAgain () { // User gets a new answer without submitting a new quesiton
      this.shaking = true
      this.shakeAgain = !this.shakeAgain
      this.resetShaking()
    },

    async resetShaking () { // Resets the shake with a delay so animation can be played and then retriggered
      await setTimeout(() => this.shaking = false, 1000)
    }
  }
}
</script>

<style scoped>

.shake {
  animation: shake 1.5s cubic-bezier(.36,.07,.19,.97) both;
}

h1 {
  line-height: 1.25;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-6px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(6px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-9px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(9px, 0, 0);
  }
}
</style>
