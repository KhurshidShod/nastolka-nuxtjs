<template>
  <section>
    <img
      class="kartina"
      src="~/assets/images/case-finished/картиначб.png"
      alt=""
    />
    <img
      class="statue"
      src="~/assets/images/case-finished/статуэткачб.png"
      alt=""
    />
    <div class="container">
      <div class="finished">
        <div class="finished_home">
          <div class="finished_home__image">
            <img
              class="raskrito"
              src="~/assets/images/case-finished/raskrito.png"
              alt=""
            />
            <img
              src="~/assets/images/case-finished/обложка игры чб.png"
              alt=""
            />
          </div>
        </div>
        <div class="finished_detective">
          <h1><span>ПОЗДРАВЛЯЮ,</span> ДЕТЕКТИВ</h1>
          <FinishedTime />
          <p>
            Если вам понравилось расследовать преступления, подпишитесь на нашу
            E-MAIL рассылку, чтобы не пропустить новые дела!
          </p>
          <div class="enter_email">
            <div>
              <input type="email" placeholder="E-MAIL" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M3 13.2083H21.25M21.25 13.2083L16.0417 8M21.25 13.2083L16.0417 18.4167"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { defineAsyncComponent } from "vue";

const FinishedTime = defineAsyncComponent(() =>
  import("@/components/FinishedTime.vue")
);
</script>
<style lang="scss" scoped>
section {
  position: relative;
  width: 100%;
  padding: 250px 50px;
  background-color: rgb(26, 26, 26);
  background-image: url(~/assets/images/case-finished/Фонсдомом.png),
    url(~/assets/images/case-finished/фонсдетективом.png);
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 70%, 100% 30%;
  overflow: hidden;

  @media (max-width: 650px) {
    padding: 200px 0;
  }

  @media (max-width: 750px) {
    padding: 150px 0;
  }

  .kartina {
    position: absolute;
    width: 570px;
    height: 700px;
    left: 0;
    top: 15%;

    @media (max-width: 1150px) {
      width: 450px;
      height: 580px;
    }

    @media (max-width: 950px) {
      width: 350px;
      height: 480px;
    }

    @media (max-width: 750px) {
      width: 300px;
      height: 380px;
    }

    @media (max-width: 650px) {
      width: 150px;
      height: 200px;
      left: -5%;
    }
  }

  .statue {
    position: absolute;
    width: 444px;
    height: 850px;
    z-index: 0;
    right: 0;
    top: 25%;

    @media (max-width: 1150px) {
      width: 400px;
      height: 800px;
      right: -5%;
    }

    @media (max-width: 950px) {
      width: 300px;
      height: 650px;
    }

    @media (max-width: 750px) {
      width: 250px;
      height: 550px;
    }

    @media (max-width: 650px) {
      width: 150px;
      height: 300px;
      right: -7%;
    }
  }

  .finished {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    z-index: 2;

    &_home {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;

      &__image {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img {
          width: 70%;

          @media (max-width: 950px) {
            width: 85%;
          }

          @media (max-width: 750px) {
            width: 100%;
          }

          @media (max-width: 550px) {
            width: 75%;
          }

          &.raskrito {
            position: absolute;
            height: auto;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 50%;
          }
        }
      }
    }

    &_detective {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 2;
      padding: 0.5rem;

      .enter_email {
        width: 100%;
        max-width: 650px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        margin-top: 2rem;
        border-radius: 18px;
        border: 1px solid #fff;

        div {
          position: relative;
          width: 100%;
          height: 40px;

          input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            border-bottom: 1px solid white;
            color: white;
            font-family: "Roboto";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            padding-bottom: 1rem;

            &::placeholder {
              color: #fff;
              font-family: "Roboto";
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%;
            }
          }

          svg {
            position: absolute;
            transform: translate(-50%, -50%);
            right: 0;
            top: 50%;
          }
        }
      }

      h1 {
        color: #fefeff;
        text-align: center;
        font-family: "Another Danger";
        font-size: 74px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 16.28px;

        @media (max-width: 950px) {
          font-size: 58px;
        }

        @media (max-width: 650px) {
          font-size: 42px;
          letter-spacing: 10px;
        }

        @media (max-width: 500px) {
          font-size: 24px;
          letter-spacing: 7px;
        }

        span {
          background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        color: #fefeff;
        text-align: center;
        font-family: "Roboto";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        max-width: 850px;

        @media (max-width: 950px) {
          font-size: 20px;
          max-width: 700px;
        }

        @media (max-width: 650px) {
          font-size: 16px;
          max-width: 100%;
        }

        @media (max-width: 500px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
  