<template>
  <section>
    <div class="container">
      <div class="false_answer">
        <img class="rejected" src="~/assets/images/false/rejected.png" alt="" />
        <img
          class="lupa"
          src="~/assets/images/best-detectives/d25914a2a059b9bdc9a4eb22ac03c56d.png"
          alt=""
        />
        <h2>Вы очень близко!</h2>
        <div>
          <p>
            К сожалению, один из документов указан неверно. Перепроверьте улики
            или воспользуйтесь подсказкой.
          </p>
        </div>
        <div class="buttons">
          <ReusablesButton
            @click.prevent="redirect"
            text="Назад"
            :fontSize="30"
            :padInline="30"
            :padBlock="14"
          />
          <div class="podskazka">
            <button :class="{ open: helpOpen }" @click.prevent="toggleHelp">
              Подсказка
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.3361 23.067C28.1392 23.8701 29.4413 23.8701 30.2444 23.067C31.0475 22.2639 31.0475 20.9618 30.2444 20.1587L17.9057 7.82002C17.1026 7.01693 15.8005 7.01693 14.9974 7.82002L2.65868 20.1587C1.85559 20.9618 1.85559 22.2639 2.65868 23.067C3.46178 23.8701 4.76385 23.8701 5.56694 23.067L16.4515 12.1824L27.3361 23.067Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="help" :class="{ open: helpOpen }">
              <div
                class="help-content"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
              >
                <div
                  v-for="(helpItem, index) in currentCaseQuestion?.help"
                  :key="index"
                  class="help-item"
                >
                  {{ helpItem }}
                </div>
              </div>
              <div class="arrows">
                <button @click="prevHelp" class="arrow left">
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
                <button @click="nextHelp" class="arrow right">
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { cases } from "~/assets/data";

const router = useRouter();
const route = useRoute();
const currentCase = ref(null);
const currentCaseQuestion = ref(null);
const helpOpen = ref(false);
const currentIndex = ref(0);

const redirect = () => {
  navigateTo(`/play/stage-${Number(route.params.stage.split("").reverse()[0])}`);
};

const findCurrentCase = () => {
  currentCase.value = cases.find(
    (cs) =>
      cs.title.toLowerCase().split(" ").join("-") ===
      "загадочное-убийство-на-вилле-кортни"
  );
  currentCaseQuestion.value = cases
    .find(
      (cs) =>
        cs.title.toLowerCase().split(" ").join("-") ===
        "загадочное-убийство-на-вилле-кортни"
    )
    .caseQuestions.find(
      (ques) => ques.id == route.params.stage?.split("").reverse()[0]
    );
};

const nextHelp = () => {
  if (currentCaseQuestion.value?.help) {
    currentIndex.value =
      (currentIndex.value + 1) % currentCaseQuestion.value.help.length;
  }
};

const prevHelp = () => {
  if (currentCaseQuestion.value?.help) {
    currentIndex.value =
      (currentIndex.value - 1 + currentCaseQuestion.value.help.length) %
      currentCaseQuestion.value.help.length;
  }
};

const toggleHelp = () => {
  helpOpen.value = !helpOpen.value;
};

watch(route, findCurrentCase);

onMounted(findCurrentCase);
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  padding-top: 200px;
  padding-bottom: 100px;
  background: url(~/assets/images/handbg.png) rgb(32, 32, 32) 50% / cover
    no-repeat;

  .container {
    @media (max-width: 600px) {
      padding: 0;
    }
  }

  .false_answer {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 100px 250px;
    padding-bottom: 15rem;
    padding-top: 10rem;
    background-attachment: fixed;
    gap: 2rem;
    background-position: left;
    background: url(~/assets/images/false/finger-white.png)
      rgba(211, 211, 211, 0) 50% / cover no-repeat;

    @media (max-width: 1200px) {
      gap: 1rem;
      padding-inline: 100px 220px;
    }

    @media (max-width: 950px) {
      padding-inline: 50px 100px;
    }

    @media (max-width: 800px) {
      padding-inline: 50px;
    }

    @media (max-width: 750px) {
      padding-top: 5rem;
      padding-inline: 70px;
      padding-bottom: 12rem;
    }

    @media (max-width: 600px) {
      padding-inline: 50px;
    }

    @media (max-width: 500px) {
      padding-inline: 10px;
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: row;

      .podskazka {
        position: relative;
        border-top-left-radius: 11px;
        border-top-right-radius: 11px;

        button {
          transition: 0.3s ease;
          display: inline-flex;
          padding: 14px 25px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          border-radius: 9px;
          background: linear-gradient(180deg, #cf0000 0%, #650000 100%);
          box-shadow: 0px 0px 45px 0px #9e0b0b;
          cursor: pointer;
          svg {
            width: 20px;
            transform: rotate(180deg);
            height: 20px;
          }
          @media (max-width: 900px) {
            padding: 16px 22px;
            font-size: 18px;
          }

          @media (max-width: 700px) {
            padding: 12px 18px;
            font-size: 16px;
          }

          &.open {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            svg {
              transform: rotate(0deg);
            }
          }
        }

        .help {
          width: 100%;
          height: 0;
          overflow: hidden;
          position: absolute;
          text-align: center;
          color: #fff;
          background: linear-gradient(
            180deg,
            rgba(207, 0, 0, 0.87) 0%,
            rgba(101, 0, 0, 0.87) 100%
          );
          backdrop-filter: blur(3.212px);
          transition: height 0.3s ease;
          top: 100%;

          .arrows {
            width: 100%;
            height: 20px;
            position: absolute;
            bottom: 10px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;

            .arrow {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              background: transparent;
              padding: 0px;
              color: black;
              font-family: "Roboto";

              svg {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: rotate(0);
                path {
                  fill: white;
                }
              }
            }
          }

          &.open {
            height: 150px;
          }

          .help-content {
            display: flex;
            transition: transform 0.3s ease;
            width: 100%;
            height: 100%;
          }

          .help-item {
            height: 100%;
            width: 100%;
            height: 150px !important;
            box-sizing: border-box;
            text-align: center;
            padding: 0.5rem;
            transform: translateY(-75%);
            color: #fff;
            text-align: center;
            font-family: "Roboto";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;

            @media (max-width: 750px) {
              font-size: 14px;
              line-height: 100%;
            }

            &:first-child {
              transform: translateX(100%) translateY(58%);
            }
          }
        }
      }
    }

    .rejected {
      position: absolute;
      width: 180px;
      height: 130px;
      top: 30px;
      left: 7%;

      @media (max-width: 1200px) {
        gap: 1rem;
        top: 0;
      }

      @media (max-width: 900px) {
        left: 0;
        width: 150px;
        height: 120px;
        bottom: 15%;
      }

      @media (max-width: 750px) {
        left: 0;
        width: 120px;
        height: 100px;
        bottom: 15%;
      }
    }

    .lupa {
      position: absolute;
      width: 220px;
      height: 250px;
      bottom: 18%;
      left: -3%;
      transform: rotate(20deg);

      @media (max-width: 1200px) {
        width: 220px;
        height: 240px;
        bottom: 15%;
      }

      @media (max-width: 950px) {
        width: 180px;
        height: 200px;
        bottom: 10%;
      }

      @media (max-width: 750px) {
        left: 0;
        width: 150px;
        height: 170px;
        bottom: 15%;
      }

      @media (max-width: 550px) {
        left: 0;
        width: 100px;
        height: 120px;
        bottom: 20%;
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: var(--text-dark);
      text-align: center;
      font-family: "Roboto";
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 125%;
      z-index: 2;

      @media (max-width: 1200px) {
        font-size: 36px;
      }

      @media (max-width: 750px) {
        font-size: 28px;
      }

      @media (max-width: 550px) {
        font-size: 22px;
      }

      img {
        @media (max-width: 750px) {
          width: 25px;
          height: 25px;
        }
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      z-index: 2;

      p {
        color: var(--text-dark);
        text-align: center;
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 110%;

        @media (max-width: 1200px) {
          font-size: 18px;
        }

        @media (max-width: 750px) {
          font-size: 16px;
        }

        @media (max-width: 550px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>