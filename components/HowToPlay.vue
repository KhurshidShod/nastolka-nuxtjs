<template lang="">
    <section>
      <img
        class="hero_camera"
        :class="{ sculpture: openingPage === 'case' }"
        v-if="openingPage === 'home'"
        src="~/assets/images/hero/camera.png"
        alt=""
      />
      <img
        class="hero_camera"
        :class="{ sculpture: openingPage === 'case' }"
        v-if="openingPage === 'case'"
        src="~/assets/images/howtoplay/sculpture.png"
        alt=""
      />
      <img
        class="dnevnik"
        :class="{ kartinka: openingPage === 'case' }"
        v-if="openingPage === 'home'"
        src="~/assets/images/howtoplay/dnevnik.png"
        alt=""
      />
      <img
        class="dnevnik"
        :class="{ kartinka: openingPage === 'case' }"
        v-if="openingPage === 'case'"
        src="~/assets/images/howtoplay/image.png"
        alt=""
      />
      <div class="container">
        <div class="howToPlay">
          <h1 class="howToPlay_header">
            <img ref="lupaText" src="~/assets/images/howtoplay/lupahowtoplay.png" alt="" />
            КАК ИГРАТЬ?
          </h1>
          <div
            class="howToPlay_tips"
            :class="{ case: openingPage === 'case' }"
          >
            <div class="howToPlay_tips_group">
              <div
                class="howToPlay_tips_group_tip"
                v-for="rule in allRules.slice(0, 2)"
                :key="rule.id"
              >
                <div v-if="openingPage === 'home'" class="image">
                  <img
                    src="~/assets/images/howtoplay/elipse1.jpeg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div v-if="openingPage === 'case'" class="image_card"></div>
                <div class="text">
                  <span>{{ rule.id + 1 }}.</span>
                  <h1>{{ rule.title }}</h1>
                  <p>{{ rule.content }}</p>
                </div>
              </div>
            </div>
            <div class="howToPlay_tips_group">
              <div
                class="howToPlay_tips_group_tip"
                v-for="rule in allRules.slice(2, 4)"
                :key="rule.id"
              >
                <div v-if="openingPage === 'home'" class="image">
                  <img
                    src="~/assets/images/howtoplay/elipse1.jpeg"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div v-if="openingPage === 'case'" class="image_card"></div>
                <div class="text">
                  <span>{{ rule.id + 1 }}.</span>
                  <h1>{{ rule.title }}</h1>
                  <p>{{ rule.content }}</p>
                </div>
              </div>
            </div>
            <ReusablesButton
              class="play_button"
              v-if="openingPage === 'case'"
              text="Играть"
              :padBlock="20"
              :padInline="44"
              :fontSize="28"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { rules } from "~/assets/data";
import gsap from "gsap";

let ScrollTrigger = null;

const props = defineProps(["openingPage"]);
const allRules = ref(rules);

const lupaText = ref(null);

const animateLupa = () => {
  if (process.client) {
    gsap.fromTo(
      lupaText.value,
      { x: -550 },
      {
        x: 0,
        ease: "power2.out",
        duration: 5,
        scrollTrigger: {
          trigger: lupaText.value,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1.3,
          toggleActions: "play none none reverse",
        },
      }
    );
  }
};

onMounted(async () => {
  if (process.client) {
    const module = await import("gsap/ScrollTrigger");
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
    animateLupa();
  }
});
</script>
<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  padding-top: 130px;
  padding-bottom: 150px;
  background: url(~/assets/images/howtoplay/howtoplaybg.png) lightgray 0px 0px /
    100.312% 99.038% no-repeat;
  background-position: center;
  background-color: black;
  background-size: cover;
  background-attachment: local;
  background-repeat: no-repeat;
  overflow: hidden;

  @media (max-width: 450px) {
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .hero_camera {
    position: absolute;
    width: 600px;
    right: 0%;
    top: 0%;
    z-index: 2;
    min-width: 120px;

    @media (max-width: 1100px) {
      width: 450px;
    }

    @media (max-width: 900px) {
      width: 350px;
    }

    @media (max-width: 450px) {
      width: 150px;
      top: 0%;
    }

    &.sculpture {
      width: 360px;
      height: 820px;
      top: 10%;
      right: -1%;

      @media (max-width: 1100px) {
        width: 300px;
        top: 15%;
      }

      @media (max-width: 900px) {
        width: 250px;
        height: 700px;
      }

      @media (max-width: 450px) {
        width: 150px;
        height: 350px;
        top: 0%;
      }
    }
  }

  .dnevnik {
    position: absolute;
    top: 0%;
    left: 0;
    width: 560px;

    @media (max-width: 1100px) {
      width: 450px;
    }

    @media (max-width: 900px) {
      width: 350px;
    }

    @media (max-width: 750px) {
      width: 250px;
      top: 12%;
    }

    @media (max-width: 600px) {
      width: 200px;
    }

    @media (max-width: 450px) {
      width: 120px;
      top: 7%;
    }

    &.kartinka {
      @media (max-width: 750px) {
        width: 250px;
        top: 5%;
      }

      @media (max-width: 450px) {
        width: 200px;
        top: 0%;
      }
    }
  }

  .howToPlay {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 122px;

    @media (max-width: 750px) {
      gap: 20px;
    }

    &_header {
      position: relative;
      color: #27221b;
      text-align: center;
      font-family: "Another Danger";
      font-size: 74px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 16.28px;
      border-radius: 5px;
      z-index: 2;

      img {
        width: 375px;
        height: 442.219px;
        position: absolute;
        transform: rotate(15deg);
        top: -60%;
        left: -50%;

        @media (max-width: 900px) {
          width: 280px;
          height: 330px;
        }

        @media (max-width: 750px) {
          width: 250px;
          height: 300px;
          left: -40%;
          top: -50%;
        }

        @media (max-width: 580px) {
          width: 200px;
          height: 250px;
          transform: rotate(10deg);
          left: -45%;
          top: -40%;
        }

        @media (max-width: 450px) {
          width: 120px;
          height: 170px;
          left: -50%;
          top: -80%;
        }
      }

      @media (max-width: 900px) {
        font-size: 56px;
      }

      @media (max-width: 580px) {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 5px;
      }

      @media (max-width: 450px) {
        font-size: 22px;
        font-weight: 700;
      }
    }

    &_tips {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 75px;

      .play_button {
        max-width: 400px;
      }

      &.case {
        flex-direction: column;
        width: 80%;

        @media (max-width: 950px) {
          width: 100%;
        }

        .howToPlay_tips_group {
          width: 100%;

          &_tip {
            max-width: 100%;

            @media (max-width: 750px) {
              flex-direction: column;
            }

            .text {
              @media (max-width: 750px) {
                flex-direction: column;
                width: 100%;
                text-align: center;
                align-items: center;
              }

              span {
                @media (max-width: 750px) {
                  left: -65%;
                  top: -150%;
                }
              }
            }
          }
        }
      }

      @media (max-width: 850px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 75px;
      }

      @media (max-width: 450px) {
        gap: 2rem;
      }

      &_group {
        width: calc(100% / 2 - 50px);
        display: flex;
        flex-direction: column;
        gap: 100px;
        justify-content: space-between;

        @media (max-width: 850px) {
          width: 100%;
        }

        @media (max-width: 450px) {
          gap: 2rem;
        }

        &_tip {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          position: relative;
          gap: 10px;
          width: 100%;
          max-width: 650px;
          min-width: 200px;
          border-radius: 2px;
          z-index: 2;

          @media (max-width: 850px) {
            width: 100%;
            max-width: 100%;
          }

          .image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;

            @media (max-width: 450px) {
              width: 56px;
              height: 56px;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }

          .image_card {
            width: 65%;
            height: 320px;
            background-color: white;
            border-radius: 20px;

            @media (max-width: 900px) {
              width: 350px;
              height: 280px;
            }

            @media (max-width: 450px) {
              width: 75%;
              min-width: 250px;
              height: 280px;
            }
          }

          .text {
            width: calc(100% - 130px);
            display: flex;
            justify-content: start;
            align-items: start;
            flex-direction: column;
            position: relative;

            @media (max-width: 450px) {
              width: calc(100% - 56px);
            }

            span {
              position: absolute;
              right: -10%;
              top: -50%;
              color: rgba(130, 120, 107, 0.27);
              text-align: center;
              leading-trim: both;
              text-edge: cap;
              font-family: "LT Remark";
              font-size: 250px;
              font-style: italic;
              font-weight: 700;
              line-height: normal;

              @media (max-width: 850px) {
                font-size: 200px;
                right: 10%;
                top: -80%;
              }

              @media (max-width: 650px) {
                font-size: 120px;
                right: 20%;
                top: -50%;
              }

              @media (max-width: 450px) {
                font-size: 62px;
                right: 25%;
              }
            }

            h1 {
              font-family: "Roboto";
              color: var(--text-dark);
              font-size: 42px;
              font-style: normal;
              font-weight: 700;
              z-index: 2;

              @media (max-width: 850px) {
                font-size: 36px;
                font-weight: 700;
              }

              @media (max-width: 650px) {
                font-size: 28px;
              }

              @media (max-width: 450px) {
                font-size: 22px;
              }
            }

            p {
              color: var(--text-dark);
              font-family: "Roboto";
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
              line-height: 140%;
              z-index: 2;

              &::first-letter {
                text-transform: uppercase;
              }

              @media (max-width: 850px) {
                font-size: 22px;
              }

              @media (max-width: 650px) {
                font-size: 18px;
              }

              @media (max-width: 450px) {
                font-size: 12px;
              }
            }
          }
        }
      }

      .tip1 {
        order: 1;
      }
    }
  }
}
</style>