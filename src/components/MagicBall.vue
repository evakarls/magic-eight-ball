<template>
  <div class="flex justfiy-center items-center rounded-full w-96 h-96 ball">
    <div class=" flex items-center ml-28 outer-circle rounded-full w-40 h-40">
      <div class="flex items-center justify-center bg-black rounded-full w-full h-full m-1 owerflow-hidden">
         <transition name="fade-in">
          <div
            v-if="selectedAnswer"
            class="answer-card"
            :key="selectedAnswer">
            <div
            id="answer">{{ selectedAnswer }}
            </div>
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
      answered: false,
      selectedAnswer: null,
      answers: [
        { id: 1, label: "Auðvitað" },
        { id: 2, label: "Enga bjartsýni"},
        { id: 3, label: "Ekki séns" },
        { id: 4, label: "Já!" },
        { id: 5, label: "Nei!" },
        { id: 6, label: "Mögulega" },
        { id: 7, label: "Ekki vera kjáni" },
        { id: 8, label: "Gleymdu því!" }
      ]
    }
  },

  methods: {
    generateRandomIndex () {
      return Math.floor(Math.random() * Math.floor(this.answers.length))
    }
  },

  watch: {
    questionAsked: {
      handler (val) {
        if (!val) return this.selectedAnswer = null
        this.selectedAnswer = this.answers[this.generateRandomIndex()].label
      }
    },

    shakeAgain: {
      handler () {
        this.selectedAnswer = false
        this.selectedAnswer = this.answers[this.generateRandomIndex()].label
      }
    }
  }
}
</script>

<style scoped>
.ball {
  /* display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 450px;
  height: 450px; */
  position: relative;
  background: radial-gradient(circle at 80% 90%,  #0a0a0a 80%, #323232, #000000 100%);
  box-shadow:inset -20px -20px 20px 2px #222, inset 20px 20px 20px 5px rgba(53, 53, 53, 0.4), inset -5px -5px 5px 2px rgb(198, 198, 198);
}
.ball:before {
  content: "";
  position: absolute;
  background: radial-gradient(circle at 20% 70%,  rgba(123, 123, 123, 0.45), rgba(123, 123, 123, 0) 60%);
  box-shadow:inset -20px -20px 20px 2px #222, inset 20px 20px 20px 5px rgba(53, 53, 53, 0.4);
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
  /* width: 40%;
  height: 40%;
  margin-top: 50px;
  border-radius: 50%;
  background: #0a0a0a; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: radial-gradient(circle at 160% 50%,  rgba(225, 225, 225, 0.4), rgba(230, 230, 230, 0) 60%);
  box-shadow:inset -1px -1px 1px 1px rgb(22, 22, 22), inset 1px 1px 1px 1px rgba(19, 19, 19, 0.4);
}

.inner-circle {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: black;
  overflow: hidden; */
  box-shadow:inset -1px -1px 1px 1px rgb(24, 24, 24), inset 1px 1px 1px 1px rgba(24, 24, 24, 0.4);
}

.answer-card {
  margin-top: 10px;
  max-height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-top: 100px solid rgba(18, 18, 213, 0.8);
  position: relative;
  font-size: 10px;
  color: rgb(90, 206, 255);
  /* overflow: hidden; */
  -webkit-filter: drop-shadow(2px 2px 4px rgb(208, 209, 245));
  filter: drop-shadow(1px 1px 4px rgb(134, 140, 255));
}

.fade-in-enter-active {
  transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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

#answer {
  width: 80px;
  height: 60px;
  position: absolute;
  font-family: Jura;
  font-size: 1rem;
  text-align: center;
  text-shadow: 1px 1px #b5c6ff;
  overflow: hidden;
  top: -100px;
  left: -42px;
}

</style>
