<template lang="">
    <section>
        <div class="container">
            <div class="username">
                <h1 class="username_header">
                    вы успешно <span>авторизовались</span>
                </h1>
                <p class="username_header2">Хотите сменить имя пользователя?</p>
                <div class="username_form">
                    <div class="elipse"></div>
                    <form @submit.prevent="handleAuthorization">
                        <p>Введите имя пользователя</p>
                        <input type="text" v-model="username" placeholder="Username" />
                        <ReusablesButton text="СОХРАНИТЬ" :fontSize="30" :padInline="30" :padBlock="14" />
                        <p>Вы можете оставить имя по умолчанию, либо изменить его</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");

const router = useRouter();

const handleAuthorization = () => {
  localStorage.setItem("username", username.value);
  router.push("/").then(() => router.go(0));
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  padding: 220px 5rem;
  background: url(~/assets/images/handbg.png) rgb(24, 24, 24) 50% / cover
    no-repeat;

  @media (max-width: 750px) {
    padding: 220px 0;
  }

  @media (max-width: 520px) {
    padding: 200px 0;
  }

  .username {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &_header2 {
      color: #fff;
      text-align: center;
      font-family: "Another Danger";
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 7.04px;
      margin-top: 20px;

      @media (max-width: 950px) {
        font-size: 24px;
      }

      @media (max-width: 750px) {
        font-size: 18px;
      }

      @media (max-width: 650px) {
        font-size: 16px;
        letter-spacing: 5px;
      }

      @media (max-width: 520px) {
        font-size: 12px;
      }

      @media (max-width: 385px) {
        font-size: 10px;
      }
    }

    &_header {
      text-transform: uppercase;
      text-align: center;
      color: #fefeff;
      font-family: "Another Danger";
      font-size: 74px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 16.28px;

      @media (max-width: 950px) {
        font-size: 64px;
      }

      @media (max-width: 750px) {
        font-size: 48px;
      }

      @media (max-width: 650px) {
        font-size: 32px;
      }

      @media (max-width: 520px) {
        font-size: 26px;
        letter-spacing: 10px;
      }

      @media (max-width: 385px) {
        font-size: 20px;
      }

      span {
        background-color: red;
        background: linear-gradient(180deg, #cf0000 50%, #650000 99.59%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: "Another Danger";
        font-size: 74px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 16.28px;

        @media (max-width: 950px) {
          font-size: 64px;
        }

        @media (max-width: 750px) {
          font-size: 48px;
        }

        @media (max-width: 650px) {
          font-size: 32px;
        }

        @media (max-width: 520px) {
          font-size: 26px;
          letter-spacing: 10px;
        }

        @media (max-width: 385px) {
          font-size: 20px;
        }
      }
    }

    &_form {
      position: relative;
      width: 560px;
      flex-shrink: 0;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-top: 75px;

      @media (max-width: 750px) {
        width: 100%;
      }

      @media (max-width: 520px) {
        margin-top: 55px;
      }

      .elipse {
        position: absolute;
        width: 570px;
        height: 465px;
        flex-shrink: 0;
        border-radius: 570px;
        background: rgba(255, 255, 255, 0.28);
        filter: blur(60px);

        @media (max-width: 750px) {
          width: 100%;
        }
      }

      form {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 50px;
        background: rgba(30, 30, 30, 0.92);
        backdrop-filter: blur(5px);
        padding: 3rem 4.5rem;
        gap: 3rem;
        z-index: 2;

        @media (max-width: 750px) {
          padding: 2rem;
          border-radius: 40px;
          gap: 2rem;
        }

        input {
          width: 90%;
          border: none;
          outline: none;
          background-color: transparent;
          border-bottom: 1px solid #b3b3b3;
          padding-bottom: 0.5rem;
          padding-top: 1rem;
          color: white;
          font-size: 16px;

          &::placeholder {
            color: #b3b3b3;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;

            @media (max-width: 750px) {
              font-size: 18px;
            }
          }
        }

        p {
          &:first-child {
            color: #fff;
            font-family: "Roboto";
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-align: center;

            @media (max-width: 950px) {
              font-size: 28px;
              font-weight: 900;
            }

            @media (max-width: 750px) {
              font-size: 28px;
              font-weight: 900;
            }

            @media (max-width: 470px) {
              font-size: 20px;
              font-weight: 900;
            }
          }

          &:last-child {
            color: #666;
            text-align: center;
            font-family: "Roboto";
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%;
            max-width: 360px;

            @media (max-width: 950px) {
              font-size: 18px;
              max-width: 300px;
            }

            @media (max-width: 750px) {
              font-size: 18px;
              max-width: 300px;
            }

            @media (max-width: 470px) {
              font-size: 14px;
              max-width: 250px;
            }
          }
        }

        button {
          color: #fff;
          text-align: center;
          font-family: "Roboto";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          padding: 14px 30px;

          @media (max-width: 950px) {
            font-size: 26px;
            padding: 12px 30px;
          }

          @media (max-width: 750px) {
            font-size: 22px;
            padding: 10px 30px;
          }
        }
      }
    }
  }
}
</style>
