<template>
  <div class="flex w-full justify-around">
    <div class="text-left">
      <h2>
        Munt þú vinna í lottó?<br>
        Verður rigning á morgun?<br>
        Elskar mamma þín þig?
      </h2>
      <h3>Spyrðu mig og ég mun segja þér allt!</h3>
      <div
        class="flex justify-between items-center"
        v-if="!questionAsked">
        <input
          v-model="question"
          class="rounded h-12 w-full mr-4 p-4 focus:ring-3 focus:ring-blue-500">
        <button
          class="font-start"
          @click="submitQuestion"
          :disabled="!question.length">
          Senda
        </button>
      </div>
      <div v-else class="flex space-around">
        <button
          class="mr-4"
          @click="submitShakeAgain">
            Glatað svar! Hrista aftur!
          </button>
        <button
          @click="questionAsked = !questionAsked">
            Nýja spurningu, takk!
          </button>
      </div>
    </div>
    <magic-ball
      :class="shaking ? 'shake' : ''"
      :question-asked="questionAsked"
      :shake-again="shakeAgain"/>
  </div>
</template>

<script>

import MagicBall from './MagicBall'

export default {

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
      this.questionAsked = !this.questionAsked // SETS THE BOOLEAN WHICH IS PASSED TO MAGIC BALL COMPONENT
      this.question = ''
      this.resetShaking()
    },

    submitShakeAgain () { // USER GETS A NEW ANSWER WITHOUT TYPING A NEW QUESTION
      this.shaking = true
      this.shakeAgain = !this.shakeAgain
      this.resetShaking()
    },

    async resetShaking () { // RESETS THE SHAKE WITH A DELAY SO ANIMATION CAN BE PLAYED AND THEN RETRIGGERED
      await setTimeout(() => this.shaking = false, 1000)
    }
  }
}
</script>

<style scoped>

.shake {
  animation: shake 1.5s cubic-bezier(.36,.07,.19,.97) both;
}

h2 {
  font-family: 'Press Start 2P';
  text-shadow: 1px 1px 2px rgb(99, 107, 255);
  margin: 40px 0 10px 10px;
  line-height: 1.6;
  font-size: 32px;
  color: white
}

h3 {
  font-family: 'Press Start 2P';
  margin: 40px 0 40px 10px;
  font-size: 16px;
  color: white
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
