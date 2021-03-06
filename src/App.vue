<template>
  <div class="m-8">
    <div class="w-full flex justify-end">
      <div class="rounded w-22 bg-white cursor-pointer font-custom text-xs p-2 mb-8">
        <select v-model="$i18n.locale">
          <option value="en">Eng</option>
          <option value="is">Ísl</option>
        </select>
      </div>
    </div>
    <div class="w-full flex flex-col-reverse md:flex-row md:justify-around py-8 text-center">
      <div class="flex flex-col-reverse md:flex-col text-left w-full md:w-1/2 mb-8">
        <div>
          <h1>{{ $t('heading.lottery') }} {{ $t('heading.rain') }} {{ $t('heading.mother') }}</h1>
          <h2>{{ $t("subheading") }}</h2>
        </div>
        <div
          class="flex flex-wrap items-center"
          v-if="!questionAsked">
          <input
            v-model="question"
            :placeholder="$t('questionPlaceholder')"
            class="font-custom rounded h-12 w-full md:w-4/5 md:mr-4 p-4 my-4">
          <button
            class="font-custom w-2/3 md:w-1/6"
            @click="submitQuestion"
            :disabled="!question.length">
            {{ $t('buttons.submit') }}
          </button>
        </div>
        <div v-else class="flex w-full flex-wrap my-8">
          <button
            class="w-full md:w-2/5 md:mr-4 my-2"
            @click="submitShakeAgain">
              {{ $t('buttons.shakeAgain') }}
            </button>
          <button
            class="w-full md:w-2/5 my-2"
            @click="questionAsked = !questionAsked">
              {{ $t('buttons.askAgain') }}
            </button>
        </div>
      </div>
      <magic-ball
        class="self-center"
        :class="shaking ? 'shake' : ''"
        :question-asked="questionAsked"
        :shake-again="shakeAgain"/>
    </div>
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
