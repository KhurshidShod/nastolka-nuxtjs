<template>
  <section>
    <div class="container">
      <div class="true_answer">
        <img class="approved" src="~/assets/images/true/approved.png" alt="" />
        <img
          class="lupa"
          src="~/assets/images/best-detectives/d25914a2a059b9bdc9a4eb22ac03c56d.png"
          alt=""
        />
        <h2>
          Совершенно верно!
          <img src="~/assets/images/true/true.svg" alt="" />
        </h2>
        <div>
          <p v-for="msg in currentCaseQuestion?.accepted" :key="msg">
            {{ msg }}
          </p>
        </div>
        <ReusablesButton
          @click.prevent="redirect()"
          text="ДАЛЕЕ"
          :fontSize="30"
          :padInline="30"
          :padBlock="14"
        ></ReusablesButton>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cases } from "~/assets/data";

const currentCaseQuestion = ref(null);
const prevRoute = ref(null);
const currentCase = ref(null);

const route = useRoute();
const router = useRouter();
console.log(route.params);
const findCurrentCase = () => {
  const path = route.params.slug.split("-").join(" ");
  currentCase.value = cases.find((cs) => cs.title.toLowerCase() === path);
  currentCaseQuestion.value = currentCase?.value?.caseQuestions?.find(
    (ques) => ques.id == route.params.stage.split("").reverse()[0]
  );
};

const redirect = () => {
  if (currentCase.value?.caseQuestions.length == route.params.stage.split("").reverse()[0]) {
    navigateTo(`/${route.params.slug}/finished`);
  } else {
    navigateTo(`/${route.params.slug}/confirmation/${Number(route.params.stage.split("").reverse()[0]) + 1}`);
  }
};

watch(
  route,
  () => {
    findCurrentCase();
  },
  { immediate: true }
);

onMounted(() => {
  findCurrentCase();
});
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  padding-top: 200px;
  padding-bottom: 100px;
  background: url(~/assets/images/handbg.png) rgb(32, 32, 32) 50% / cover
    no-repeat;

  .container {
    @media (max-width: 750px) {
      padding: 0;
    }
  }

  .true_answer {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 100px 250px;
    padding-bottom: 10rem;
    padding-top: 10rem;
    background-attachment: fixed;
    gap: 2rem;
    background-position: left;
    background: url(~/assets/images/true/truebg.png) rgba(211, 211, 211, 0) 50% /
      cover no-repeat;

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
    }

    @media (max-width: 600px) {
      padding-inline: 10px;
    }

    .approved {
      position: absolute;
      width: 180px;
      height: 150px;
      top: 30px;
      left: 7%;

      @media (max-width: 1200px) {
        gap: 1rem;
        top: 0;
      }

      @media (max-width: 750px) {
        left: 0;
        width: 150px;
        height: 120px;
        bottom: 15%;
      }

      @media (max-width: 750px) {
        left: 0;
        width: 180px;
        height: 150px;
        bottom: 15%;
      }
    }

    .lupa {
      position: absolute;
      width: 280px;
      height: 300px;
      bottom: 18%;
      left: -5%;
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
