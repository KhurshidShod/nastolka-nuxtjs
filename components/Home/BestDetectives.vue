<template lang="">
    <section>
        <div class="container">
            <div class="best_detectives">
                <h1><span>ЛУЧШИЕ</span> ДЕТЕКТИВЫ <img ref="lupa" src="~/assets/images/best-detectives/d25914a2a059b9bdc9a4eb22ac03c56d.png" alt=""></h1>
                <div class="ratings">
                    <div :class="{'gold': index+1 === 1, 'silver': index+1 === 2, 'bronze': index+1 === 3}" class="rating" v-for="(player, index) in players" :key="player.id">
                        <img v-if="index + 1 === 1" class="number" src="~/assets/images/best-detectives/Gold.svg" alt="">
                        <img v-else-if="index + 1 === 2" class="number" src="~/assets/images/best-detectives/Silver.svg" alt="">
                        <img v-else-if="index + 1 === 3" class="number" src="~/assets/images/best-detectives/Bronze.svg" alt="">
                        <p v-else class="number">{{index+1}}.</p>
                        <p class="name">{{player.name}}</p>
                        <p class="best">{{player.best}}</p>
                    </div>
                </div>
                <div class="login_out">
                    <img class="medals" src="~/assets/images/best-detectives/medals.png" alt="">
                    <div class="login_inner">
                    <h1>Авторизуйтесь</h1>
                    <p> чтобы соревноваться с лучшими!</p>
                    <a href="https://t.me/rouqot">АВТОРИЗОВАТЬСЯ</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { players } from "~/assets/data";

gsap.registerPlugin(ScrollTrigger);

const lupa = ref(null);
const playersList = ref(players);

// const animateLupa = () => {
//   gsap.fromTo(
//     lupa.value,
//     { x: 500, opacity: 0 },
//     {
//       x: 0,
//       opacity: 1,
//       ease: "power2.out",
//       duration: 5,
//       scrollTrigger: {
//         trigger: lupa.value,
//         start: "top 60%",
//         end: "bottom 50%",
//         scrub: 1.3,
//         toggleActions: "play none none reverse",
//       },
//     }
//   );
// };

// const handleMouseMove = () => {
//   const medals = document.querySelector(".medals");
//   document.addEventListener("mousemove", (event) => {
//     const { clientX: x, clientY: y } = event;
//     medals.style.transform = `translate(${
//       (x - window.innerWidth / 2) * 0.05
//     }px, ${(y - window.innerHeight / 2) * 0.05}px)`;
//   });
// };

// onMounted(() => {
  // animateLupa();
  // handleMouseMove();
// });
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  padding-top: 90px;
  padding-bottom: 150px;
  background: url(~/assets/images/best-detectives/bestbg.png)
    rgba(0, 0, 0, 0.843) 100% / cover no-repeat;
  overflow: hidden;

  .best_detectives {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      position: relative;
      text-align: center;
      font-family: "Another Danger";
      font-size: 74px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 16.28px;
      color: white;

      @media (max-width: 1200px) {
        font-size: 66px;
      }

      @media (max-width: 1100px) {
        font-size: 56px;
      }

      @media (max-width: 920px) {
        font-size: 50px;
      }

      @media (max-width: 820px) {
        font-size: 42px;
        font-weight: 900;
      }

      @media (max-width: 745px) {
        font-size: 32px;
      }

      @media (max-width: 650px) {
        font-size: 28px;
        letter-spacing: 10px;
      }

      @media (max-width: 450px) {
        font-size: 24px;
        letter-spacing: 7px;
      }

      span {
        background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      img {
        position: absolute;
        top: -45%;
        right: -17%;
        width: 300px;

        @media (max-width: 1200px) {
          width: 250px;
          top: -40%;
          right: -14%;
        }

        @media (max-width: 1100px) {
          width: 200px;
          top: -35%;
          right: -7%;
          transform: rotate(20deg);
        }

        @media (max-width: 920px) {
          width: 175px;
          top: -30%;
          right: -5%;
        }

        @media (max-width: 820px) {
          width: 150px;
          top: -30%;
          right: -7%;
        }

        @media (max-width: 745px) {
          width: 120px;
          top: -30%;
          right: -5%;
        }

        @media (max-width: 650px) {
          width: 100px;
          top: -30%;
          right: -5%;
        }

        @media (max-width: 450px) {
          width: 75px;
          top: 0%;
          right: -3%;
        }
      }
    }

    .ratings {
      margin-top: 100px;
      width: 65%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media (max-width: 745px) {
        width: 100%;
      }

      .rating {
        width: 100%;
        height: 80px;
        border-radius: 20px;
        opacity: 0.8;
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 1rem;
        opacity: 0.8;
        box-shadow: 0px -4px 15.6px 0px rgba(0, 0, 0, 0.42);

        @media (max-width: 650px) {
          height: 60px;
        }

        @media (max-width: 450px) {
          height: 50px;
        }

        &.gold {
          background: #3a2f05 !important;
        }

        &.silver {
          background: #292e37 !important;
        }

        &.bronze {
          background: #271304 !important;
        }

        &:nth-child(even) {
          background: #0a0a0a;
        }

        &:nth-child(odd) {
          background: #292929;
        }

        img.number {
          @media (max-width: 650px) {
            width: 50px;
          }

          @media (max-width: 450px) {
            width: 35px;
          }
        }

        p {
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.48px;

          @media (max-width: 650px) {
            font-size: 16px;
          }

          @media (max-width: 450px) {
            font-size: 14px;
          }

          &.number {
            width: 10%;
            text-align: center;
          }

          &.name {
            width: 35%;
          }

          &.best {
            flex-grow: 1;
            text-align: center;
          }
        }
      }
    }

    .login_out {
      position: relative;
      width: 850px;
      padding: 2rem;
      margin-top: 100px;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;

      @media (max-width: 950px) {
        width: 650px;
      }

      @media (max-width: 650px) {
        width: 500px;
        margin-top: 50px;
      }

      @media (max-width: 450px) {
        width: 100%;
        padding: 0;
      }

      img {
        position: absolute;
        right: -10%;
        top: 45%;
        width: 450px;

        @media (max-width: 1050px) {
          width: 350px;
          right: -5%;
          top: 50%;
        }

        @media (max-width: 950px) {
          width: 300px;
          right: -5%;
          top: 50%;
        }

        @media (max-width: 850px) {
          width: 270px;
          right: -0%;
          top: 50%;
        }

        @media (max-width: 650px) {
          width: 270px;
          right: -5%;
          top: 50%;
        }

        @media (max-width: 450px) {
          width: 127px;
          right: 0%;
          top: 60%;
        }
      }

      .login_inner {
        width: 100%;
        height: 450px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        background: url(~/assets/images/best-detectives/loginbg.png) 0px -0.975px /
          100% 100.179% no-repeat;
        gap: 1rem;
        z-index: 2;
        padding: 2rem;

        @media (max-width: 950px) {
          height: 350px;
        }

        @media (max-width: 650px) {
          height: 300px;
        }

        @media (max-width: 450px) {
          height: auto;
          padding-bottom: 2rem;
          gap: 0.5rem;
        }

        h1 {
          text-align: center;
          font-family: "Another Danger";
          font-size: 74px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 16.28px;
          background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          @media (max-width: 950px) {
            font-size: 48px;
            font-weight: 700;
          }

          @media (max-width: 650px) {
            font-size: 28px;
          }

          @media (max-width: 450px) {
            font-size: 18px;
            font-weight: 900;
            letter-spacing: 5px;
          }
        }

        p {
          color: var(--text-dark);
          text-align: center;
          font-family: "Roboto";
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          @media (max-width: 950px) {
            font-size: 28px;
          }

          @media (max-width: 650px) {
            font-size: 20px;
          }

          @media (max-width: 450px) {
            font-size: 11px;
          }
        }

        a {
          margin-top: 2rem;
          display: inline-flex;
          padding: 20px 44px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 11px;
          background: linear-gradient(180deg, #cf0000 0%, #650000 100%);
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 42px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: 0.3s linear;

          &:hover {
            box-shadow: 0px 0px 45px 0px #9e0b0b;
          }

          @media (max-width: 450px) {
            width: 80%;
            margin-top: 1rem;
            font-size: 14px;
            padding: 8px 14px;
          }

          @media (max-width: 900px) {
            padding: 16px 22px !important;
            font-size: 24px !important;
          }

          @media (max-width: 700px) {
            padding: 12px 18px !important;
            font-size: 16px !important;
          }
        }
      }
    }
  }
}
</style>