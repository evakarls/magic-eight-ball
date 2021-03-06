<template>
  <div class="flex justfiy-center items-center rounded-full w-84 h-84 md:w-96 md:h-96 border-gray-900 border-4 ball">
    <div class="flex items-center justify-center ml-28 outer-circle rounded-full w-36 h-36 md:w-40 md:h-40">
      <div class="flex items-center justify-center bg-black rounded-full w-30 h-30 md:w-34 md:h-34 p-1 owerflow-hidden">
         <transition name="fade-in">
          <div
            v-if="selectedAnswer"
            class="relative mt-4 max-h-0 answer-card"
            :key="selectedAnswer">
            <div class="font-jura text-answer-blue w-14 h-14 pt-1 absolute -top-18 -left-7 text-xs text-center overflow-hidden answer">{{ selectedAnswer }}</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionAsked: {
      type: Boolean,
      default: false
    },
    shakeAgain: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      selectedAnswer: null,
      answerOptions: [
        { id: 1, label: "Auðvitað" },
        { id: 2, label: "Enga bjartsýni"},
        { id: 3, label: "Ekki séns" },
        { id: 4, label: "Já!" },
        { id: 5, label: "Nei!" },
        { id: 6, label: "Mögulega" },
        { id: 7, label: "Ekki vera kjáni" },
        { id: 8, label: "Gleymdu því!" },
        { id: 9, label: "Þúsund sinnum já!" },
        { id: 10, label: "Klárt mál!" }
      ]
    }
  },

  methods: {
    generateRandomIndex () {
      return Math.floor(Math.random() * Math.floor(this.answerOptions.length))
    }
  },

  watch: {
    questionAsked: {
      handler (val) {
        if (!val) return this.selectedAnswer = null
        this.selectedAnswer = this.answerOptions[this.generateRandomIndex()].label
      }
    },

    shakeAgain: {
      handler () {
        this.selectedAnswer = null
        this.selectedAnswer = this.answerOptions[this.generateRandomIndex()].label
      }
    }
  }
}
</script>

<style scoped>
.ball {
  position: relative;
  background: radial-gradient(circle at 80% 90%,  #0a0a0a 80%, #323232, #000000 100%);
  box-shadow:inset -20px -20px 20px 2px rgb(21, 21, 21), inset -5px -5px 5px 2px rgb(96, 96, 96);
}
.ball:before {
  content: "";
  position: absolute;
  background: radial-gradient(circle at 70% 70%,  rgba(94, 94, 94, 0.45), rgba(69, 69, 69, 0) 60%);
  box-shadow:inset -20px -20px 20px 5px #222, inset 20px 20px 20px 5px rgba(58, 58, 58, 0.4);
  border-radius: 50%;
  bottom: 2.5%;
  left: 5%;
  opacity: 0.6;
  height: 100%;
  width: 90%;
  -webkit-filter: blur(10px);
  z-index: 2;
}

.outer-circle {
  background: radial-gradient(circle at 160% 50%,  rgba(225, 225, 225, 0.4), rgba(230, 230, 230, 0) 60%);
  box-shadow:inset -1px -1px 1px 1px rgb(22, 22, 22), inset 1px 1px 1px 1px rgba(19, 19, 19, 0.4);
}

.inner-circle {
  box-shadow:inset -1px -1px 1px 1px rgb(24, 24, 24), inset 1px 1px 1px 1px rgba(24, 24, 24, 0.4);
}

.answer-card {
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-top: 4.8rem solid rgba(18, 18, 213);
  -webkit-filter: drop-shadow(2px 2px 4px rgb(208, 209, 245));
  filter: drop-shadow(1px 1px 4px rgb(134, 140, 255));
}

.fade-in-enter-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-in-leave-active {
  opacity: 0;
}

.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter {
  opacity: 0
}

.answer {
  text-shadow: 1px 1px #b5c6ff;
}

</style>
