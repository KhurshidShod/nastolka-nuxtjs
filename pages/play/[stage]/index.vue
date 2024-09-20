<template lang="">
    <section>
      <div class="container">
        <div class="task">
          <div :class="moreChoosen + ' more__choosen'">
            <div class="error">
              <h1>Ошибка!</h1>
              <p>Выбрано больше {{ task?.trueAnswers.length }} вариантов</p>
              <svg @click.prevent="moreChoosen = 'close'" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M9.48531 23.3988C9.07781 23.8063 9.07781 24.4669 9.48531 24.8744C9.89281 25.2819 10.5535 25.2819 10.961 24.8744L9.48531 23.3988ZM17.9175 17.9179C18.325 17.5104 18.325 16.8498 17.9175 16.4423C17.51 16.0347 16.8494 16.0347 16.4419 16.4423L17.9175 17.9179ZM16.4419 16.4423C16.0344 16.8498 16.0344 17.5104 16.4419 17.9179C16.8494 18.3254 17.51 18.3254 17.9175 17.9179L16.4419 16.4423ZM24.8741 10.9614C25.2816 10.5539 25.2816 9.89318 24.8741 9.48568C24.4665 9.07818 23.8059 9.07818 23.3984 9.48568L24.8741 10.9614ZM17.9175 16.4423C17.51 16.0347 16.8494 16.0347 16.4419 16.4423C16.0344 16.8498 16.0344 17.5104 16.4419 17.9179L17.9175 16.4423ZM23.3984 24.8744C23.8059 25.2819 24.4665 25.2819 24.8741 24.8744C25.2816 24.4669 25.2816 23.8063 24.8741 23.3988L23.3984 24.8744ZM16.4419 17.9179C16.8494 18.3254 17.51 18.3254 17.9175 17.9179C18.325 17.5104 18.325 16.8498 17.9175 16.4423L16.4419 17.9179ZM10.961 9.48568C10.5535 9.07818 9.89281 9.07818 9.48531 9.48568C9.07781 9.89318 9.07781 10.5539 9.48531 10.9614L10.961 9.48568ZM10.961 24.8744L17.9175 17.9179L16.4419 16.4423L9.48531 23.3988L10.961 24.8744ZM17.9175 17.9179L24.8741 10.9614L23.3984 9.48568L16.4419 16.4423L17.9175 17.9179ZM16.4419 17.9179L23.3984 24.8744L24.8741 23.3988L17.9175 16.4423L16.4419 17.9179ZM17.9175 16.4423L10.961 9.48568L9.48531 10.9614L16.4419 17.9179L17.9175 16.4423Z" fill="white"/>
              </svg>
            </div>
          </div>
          <h2>Задание № {{ task?.id }} - {{ task?.question }}</h2>
          <span>{{ task?.condition }}</span>
          <ul>
            <li v-for="opt in task?.options" :key="opt.id">
              <label class="label_container">
                <input type="checkbox" @change="(e) => addToAnswers(e)" :value="opt.id" :id="opt.id">
                <svg viewBox="0 0 64 64" height="2em" width="2em">
                  <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
                <p>{{ opt.option }}</p>
              </label>
            </li>
          </ul>
          <div v-if="task?.playerVersionNeeded" class="player_version">
            <h1>ИЗЛОЖИТЕ СВОЮ ВЕРСИЮ</h1>
            <textarea placeholder="Напишите здесь"></textarea>
          </div>
          <ReusablesButton @click.prevent="submitAnswers()" text="ВЫБРАТЬ" :fontSize="30" :padBlock="14" :padInline="30"></ReusablesButton>
          <span>При выборе подсказки к вашему времени прохождения добавится 15мин</span>
          <div class="helps">
            <div class="help" v-for="(hlp, index) in task?.help" :key="index" :class="{'open': openHelpIndex === index}">
              <div class="top" @click.prevent="toggleHelp(index)">
                <h1>Подсказка {{ index + 1 }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3361 23.067C28.1392 23.8701 29.4413 23.8701 30.2444 23.067C31.0475 22.2639 31.0475 20.9618 30.2444 20.1587L17.9057 7.82002C17.1026 7.01693 15.8005 7.01693 14.9974 7.82002L2.65868 20.1587C1.85559 20.9618 1.85559 22.2639 2.65868 23.067C3.46178 23.8701 4.76385 23.8701 5.56694 23.067L16.4515 12.1824L27.3361 23.067Z" fill="white"/>
                  </svg>
                </h1>
              </div>
              <div class="bottom">{{ hlp }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cases } from "../assets/data";

const moreChoosen = ref('close');
const openHelpIndex = ref(null);
const task = ref(null);
const selectedAnswers = ref([]);
const route = useRoute();
const router = useRouter();

const addToAnswers = (e) => {
  const value = Number(e.target.value);
  if (selectedAnswers.value.length < task?.value.trueAnswers.length) {
    if (!selectedAnswers.value.includes(value)) {
      selectedAnswers.value.push(value);
    } else {
      selectedAnswers.value = selectedAnswers.value.filter(
        (answer) => answer !== value
      );
    }
  } else if (selectedAnswers.value.includes(value)) {
    selectedAnswers.value = selectedAnswers.value.filter(
      (answer) => answer !== value
    );
  } else {
    moreChoosen.value = 'open';
    e.target.checked = false;
  }
};
const findCurrentCase = () => {
  task.value = cases
    .find((cs) => cs.title.toLowerCase().split(" ").join("-") === 'загадочное-убийство-на-вилле-кортни').caseQuestions.find(
      (ques) => ques.id == route.params.stage.split("").reverse()[0]
    );
};

const toggleHelp = (index) => {
  if (openHelpIndex.value === index) {
    openHelpIndex.value = null;
  } else {
    openHelpIndex.value = index;
  }
};

const submitAnswers = () => {
  if (
    JSON.stringify(task.value.trueAnswers.sort()) ===
    JSON.stringify(selectedAnswers.value.sort())
  ) {
    navigateTo(`/play/${route.params.stage}/true-answer`);
  } else {
    navigateTo(`/play/${route.params.stage}/false-answer`);
  }
};

onMounted(() => {
  findCurrentCase();
});

watch(route, () => {
  findCurrentCase();
});
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  padding-block: 150px;
  background: url(~/assets/images/handbg.png) rgb(43, 43, 43) 50% / cover
    no-repeat;

  .container {
    @media (max-width: 750px) {
      padding: 0;
    }
  }

  .task {
    width: 100%;
    padding: 2rem;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .more__choosen {
      display: none;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      backdrop-filter: blur(2px);
      position: fixed;
      z-index: 999999;
      justify-content: center;
      align-items: center;

      &.open {
        display: flex;
      }

      .error {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        padding: 2rem 1.5rem;
        border-radius: 24px;
        background: rgba(157, 20, 20, 0.92);
        backdrop-filter: blur(5.0071940422058105px);

        svg {
          position: absolute;
          top: 15px;
          right: 15px;
          cursor: pointer;
        }

        h1 {
          color: #fff;
          font-family: "Roboto";
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        p {
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    @media (max-width: 750px) {
      padding-right: 10px;
      padding-left: 10px;
      background-size: 150% 100%;
    }

    ul {
      margin-top: 50px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-dark);
        font-family: "Roboto";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;
        margin-bottom: 20px;
        color: white;
        font-size: 24px;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        @media (max-width: 750px) {
          font-size: 18px;
        }

        @media (max-width: 550px) {
          font-size: 14px;
        }

        .label_container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          cursor: pointer;

          @media (max-width: 550px) {
            gap: 0.5rem;
          }

          input {
            display: none;

            &:checked ~ svg .path {
              stroke-dasharray: 70.5096664428711 9999999;
              stroke-dashoffset: -262.2723388671875;
            }
          }

          svg {
            overflow: visible;
            width: 20px;
            height: 20px;

            @media (max-width: 550px) {
              width: 15px;
              height: 15px;
            }

            .path {
              fill: none;
              stroke: white;
              stroke-width: 8;
              stroke-linecap: round;
              stroke-linejoin: round;
              transition: stroke-dasharray 0.5s ease,
                stroke-dashoffset 0.5s ease;
              stroke-dasharray: 241 9999999;
              stroke-dashoffset: 0;
            }
          }

          p {
            color: #fff;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 46px;

            @media (max-width: 550px) {
              font-size: 18px;
              line-height: 24px;
            }
          }
        }
      }
    }

    .player_version {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      max-width: 850px;
      border-radius: 25px;
      background: #222;
      padding: 20px 40px;

      h1 {
        color: #fff;
        text-align: center;
        font-family: "Another Danger";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 4.4px;

        @media (max-width: 750px) {
          font-size: 18px;
        }

        @media (max-width: 550px) {
          font-size: 16px;
        }
      }

      textarea {
        width: 100%;
        height: 350px;
        margin-top: 20px;
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
        font-family: "Roboto";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        resize: vertical;
        min-height: 250px;

        @media (max-width: 750px) {
          font-size: 20px;
        }

        @media (max-width: 550px) {
          font-size: 16px;
        }

        &::placeholder {
          color: #fff;
          font-family: "Roboto";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          @media (max-width: 750px) {
            font-size: 20px;
          }

          @media (max-width: 550px) {
            font-size: 16px;
          }
        }
      }
    }

    .helps {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 85px;

      @media (max-width: 450px) {
        width: 95%;
        flex-direction: column;
        align-items: stretch;
        gap: 20px;
      }

      .help {
        position: relative;
        background: linear-gradient(180deg, #cf0000 0%, #650000 100%);
        border-radius: 9px;

        @media (max-width: 450px) {
          width: 100%;
        }

        .top {
          color: #fff;
          display: flex;
          align-items: center;
          text-align: center;
          padding: 10px 25px;
          height: 65px;
          border-radius: 9px;
          background: linear-gradient(180deg, #cf0000 0%, #650000 100%);
          cursor: pointer;

          @media (max-width: 850px) {
            padding: 7px 10px;
            height: 50px;
          }

          @media (max-width: 450px) {
            width: 100%;
          }

          h1 {
            display: flex;
            align-items: center;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            @media (max-width: 450px) {
              width: 100%;
            }

            svg {
              transform: rotate(180deg);

              @media (max-width: 850px) {
                width: 25px;
                height: 25px;
              }
            }

            @media (max-width: 850px) {
              font-size: 16px;
              padding: 7px 15px;
              height: 50px;
            }
          }
        }

        .bottom {
          position: absolute;
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 110%;
          border-radius: 8px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          background: linear-gradient(
            180deg,
            rgba(207, 0, 0, 0.87) 0%,
            rgba(101, 0, 0, 0.87) 100%
          );
          backdrop-filter: blur(3.2123777866363525px);
          height: 0;
          padding: 0;
          overflow: hidden;
          z-index: 5;
        }

        &.open {
          .top {
            svg {
              transform: rotate(0deg);
            }
          }

          .bottom {
            padding: 80px 10px;
            height: auto;

            @media (max-width: 1050px) {
              padding: 50px 10px;
            }
          }
        }
      }
    }

    h2 {
      color: white;
      text-align: center;
      font-family: "Roboto";
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 125%;
      max-width: 780px;

      @media (max-width: 1050px) {
        font-size: 38px;
      }

      @media (max-width: 750px) {
        font-size: 32px;
      }

      @media (max-width: 550px) {
        font-size: 24px;
      }
    }

    span {
      color: white;
      text-align: center;
      font-family: "Roboto";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      display: inline-flex;
      padding: 14px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 13px;
      border: 1px solid white;

      @media (max-width: 1050px) {
        font-size: 18px;
        padding: 10px;
      }

      @media (max-width: 550px) {
        font-size: 14px;
        padding: 5px;
      }
    }
  }
}
</style>