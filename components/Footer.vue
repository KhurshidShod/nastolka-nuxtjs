<template>
  <section id="footer">
    <div class="container">
      <div class="footer">
        <div class="footer_left">
          <h2>СМЕРТЕЛЬНЫЕ ТАЙНЫ</h2>
          <div>
            <p>117624, г.Москва, ул.Колотушкина, д.52</p>
            <p>sapchicks228@gmail.com</p>
            <p>+7(000)100-02-05</p>
          </div>
          <div>
            <p>ИП “Аветисов”</p>
            <p>ИНН 945387504354</p>
            <p>ОГРН 439764837647</p>
          </div>
        </div>
        <div class="footer_right">
          <div class="footer_right__contact">
            <p>
              Если у вас остались вопросы, пожелания или идеи для новых игр,
              свяжитесь с нами в <span>WhatsApp</span> по номеру
              +7(000)100-02-05
            </p>
          </div>
          <div class="footer_right__input">
            <div class="subscribed" :class="{ open: isSubscribed }">
              <img
                @click.prevent="isSubscribed = false"
                src="~/assets/icons/nav-close.svg"
                alt=""
              />
              <p><b>Вы успешно подписались</b> на нашу рассылку!</p>
            </div>
            <p><span>Подпишитесь,</span> чтобы не пропустить новые дела!</p>
            <form>
              <input
                v-model="email"
                placeholder="E-MAIL"
                type="email"
                name=""
                id=""
              />
              <svg
                @click.prevent="submitSubscribe()"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M3 13.2083H21.25M21.25 13.2083L16.0417 8M21.25 13.2083L16.0417 18.4167"
                  stroke="#B3B3B3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const isSubscribed = ref(false);

const submitSubscribe = () => {
  isSubscribed.value = true;
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: 150px 105px;
  width: 100%;
  background-color: var(--bg-color);

  @media (max-width: 1150px) {
    padding: 100px 55px;
  }

  @media (max-width: 650px) {
    padding: 100px 25px;
  }

  @media (max-width: 450px) {
    padding: 100px 15px;
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }

    &_left {
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      gap: 1.5rem;
      flex-grow: 1;

      @media (max-width: 800px) {
        width: 100%;
      }

      h2 {
        text-shadow: 0px -10px 50px rgb(226, 0, 0);
        font-family: "Needleteeth";
        font-size: 72px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 3.6px;
        background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 1100px) {
          font-size: 62px;
        }

        @media (max-width: 550px) {
          font-size: 56px;
        }
      }

      p {
        color: #b3b3b3;
        font-family: "Roboto";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        @media (max-width: 550px) {
          font-size: 14px;
        }
      }
    }

    &_right {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3rem;
      width: 50%;

      @media (max-width: 800px) {
        width: 100%;
      }

      &__contact {
        width: 100%;
        padding: 2rem;
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        border-radius: 27px;
        background: #222;
        box-shadow: 0px 0px 31.6px 0px rgba(0, 0, 0, 0.45) inset;

        p {
          color: #f0f0f0;
          font-family: "Roboto";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%;

          @media (max-width: 1100px) {
            font-size: 18px;
          }

          @media (max-width: 550px) {
            font-size: 14px;
          }

          span {
            background: linear-gradient(180deg, #00bd3d 77.94%, #008732 97.55%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;

            @media (max-width: 1100px) {
              font-size: 18px;
            }

            @media (max-width: 550px) {
              font-size: 18px;
            }
          }
        }
      }

      &__input {
        position: relative;
        width: 100%;

        .subscribed {
          position: absolute;
          left: 0;
          top: -18%;
          width: 100%;
          display: inline-flex;
          padding: 50px 89px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 27px;
          background: rgba(52, 85, 40, 0.92);
          backdrop-filter: blur(5.0071940422058105px);
          z-index: 3;
          transition: 0.2s linear;
          transform: scale(0);

          &.open {
            transform: scale(1);
          }

          img {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 15px;
            height: 15px;
            cursor: pointer;
          }

          p {
            color: #fff;
            font-family: "Roboto";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }

        p {
          color: #fff;
          font-family: "Roboto";
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          span {
            color: #fff;
            text-align: center;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;

            @media (max-width: 1100px) {
              font-size: 18px;
            }

            @media (max-width: 550px) {
              font-size: 16px;
            }
          }

          @media (max-width: 1100px) {
            font-size: 18px;
          }

          @media (max-width: 550px) {
            font-size: 16px;
          }
        }

        form {
          position: relative;
          width: 100%;
          height: 50px;
          margin-top: 1rem;

          svg {
            position: absolute;
            transform: translate(-50%, -50%);
            right: 0%;
            top: 50%;
            width: 25px;
            height: 25px;
            cursor: pointer;
          }

          input {
            width: 100%;
            height: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            background-color: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid #b3b3b3;
            color: white;
            font-size: 16px;

            &::placeholder {
              color: #b3b3b3;
              font-family: "Roboto";
              font-style: normal;
              font-weight: 400;
              line-height: 130%;

              @media (max-width: 550px) {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
