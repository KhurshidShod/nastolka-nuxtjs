<template lang="">
    <section id="magasine">
      <div class="container">
        <div class="magasine">
          <h1 class="magasine_heading">магазин</h1>
          <div class="items">
            <div class="item" v-for="(casee, index) in allCases" :key="casee.id">
              <div>
                <h3>{{ casee.title }}</h3>
                <p>{{ casee.description.split(' ').slice(0, 10).join(' ') }}...</p>
                <img :src="casee.image" alt="" />
                <ReusablesButton
                  @click.prevent="redirect(casee.title)"
                  text="РАССЛЕДОВАТЬ"
                  :fontSize="42"
                  :padInline="44"
                  :padBlock="20"
                />
              </div>
              <img :src="casee.image" alt="" />
            </div>
            <div class="item_skoro">
              <div>
                <h3>Яхта Бейджера</h3>
                <p>Дерзкая кража на яхте на сумму в 50.000.000$. Нужно найти вора, пока яхта не причалила к берегу</p>
              </div>
              <h1>скоро...</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { ref } from "vue";
import { cases } from "~/assets/data";

const allCases = ref(cases);
const router = useRouter();

const redirect = (title) => {
  // const formattedTitle = title.toLowerCase().split(" ").join("-");
  navigateTo(`/shop`);
};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  background: url(~/assets/images/magazine/magazinebg.png) rgb(36, 36, 36) -4.678px
    0px / 129.071% 96.46% no-repeat;
  padding-top: 5rem;
  padding-bottom: 3rem;

  .magasine {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;

    &_heading {
      text-align: center;
      font-family: "Another Danger";
      font-size: 72px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 3.96px;
      background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 800px) {
        font-size: 56px;
      }

      @media (max-width: 650px) {
        font-size: 42px;
      }

      @media (max-width: 450px) {
        font-size: 32px;
      }
    }

    .items {
      width: 85%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 5rem;

      @media (max-width: 1050px) {
        width: 100%;
      }

      .item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        border-radius: 56px;
        background: #222;
        box-shadow: inset 0px 0px 6.452px 0px rgba(0, 0, 0, 0.45);
        padding: 75px;
        max-width: 1100px;

        @media (max-width: 800px) {
          flex-direction: column;
        }

        @media (max-width: 600px) {
          padding: 2rem;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 1rem;
          width: 50%;

          @media (max-width: 800px) {
            align-items: center;
            gap: 1rem;
          }

          @media (max-width: 450px) {
            gap: 10px;
          }

          img {
            display: none;

            @media (max-width: 800px) {
              display: block;
              width: 100%;
            }
          }

          @media (max-width: 800px) {
            width: 100%;
          }

          h3 {
            color: #f0f0f0;
            font-family: "Roboto";
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            @media (max-width: 800px) {
              font-size: 32px;
              text-align: center;
            }

            @media (max-width: 650px) {
              font-size: 24px;
              text-align: center;
            }

            @media (max-width: 350px) {
              font-size: 16px;
              text-align: center;
            }
          }

          p {
            color: #f0f0f0;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            @media (max-width: 800px) {
              display: none;
            }
          }

          button {
            width: 100%;
            color: #fff;
            text-align: center;
            font-family: "Roboto";
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;

            @media (max-width: 800px) {
              font-size: 22px;
            }

            @media (max-width: 450px) {
              padding: 8px 14px;
              font-size: 18px;
              width: auto;
            }

            @media (max-width: 350px) {
              padding: 8px 14px;
              font-size: 14px;
              width: auto;
            }
          }
        }

        img {
          width: 50%;
          border-radius: 32px;

          @media (max-width: 800px) {
            display: none;
            max-width: 300px;
          }

          @media (max-width: 350px) {
            width: 150px !important;
            border-radius: 6px;
          }
        }
      }

      .item_skoro {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        border-radius: 56px;
        background: #222;
        box-shadow: inset 0px 0px 6.452px 0px rgba(0, 0, 0, 0.45);
        padding: 75px;
        max-width: 1100px;

        @media (max-width: 800px) {
          flex-direction: column;
        }

        @media (max-width: 600px) {
          padding: 2rem;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: start;
          flex-direction: column;
          gap: 1rem;
          width: 50%;

          @media (max-width: 800px) {
            align-items: center;
            gap: 1rem;
          }

          @media (max-width: 450px) {
            gap: 10px;
          }

          @media (max-width: 800px) {
            width: 100%;
          }

          h3 {
            color: #f0f0f0;
            font-family: "Roboto";
            font-size: 42px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            @media (max-width: 800px) {
              font-size: 32px;
              text-align: center;
            }

            @media (max-width: 650px) {
              font-size: 24px;
              text-align: center;
            }

            @media (max-width: 350px) {
              font-size: 16px;
              text-align: center;
            }
          }

          p {
            color: #f0f0f0;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            @media (max-width: 800px) {
              display: none;
            }
          }
        }

        h1 {
          color: #fff;
          text-align: center;
          font-family: "Another Danger";
          font-size: 74px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 16.28px;

          @media (max-width: 750px) {
            font-size: 68px;
          }

          @media (max-width: 600px) {
            font-size: 58px;
          }

          @media (max-width: 450px) {
            font-size: 36px;
            letter-spacing: 8px;
          }
        }
      }
    }
  }
}
</style>