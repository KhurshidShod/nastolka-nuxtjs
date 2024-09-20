<template lang="">
    <section id="faq">
      <img class="question_mark1" src="~/assets/icons/quest1.svg" alt="" />
      <img class="question_mark2" src="~/assets/icons/quest2.svg" alt="" />
      <div class="container">
        <div class="faq" ref="faq">
          <div class="faq_card" v-for="ques in allQuestions.slice(0, visibles)" :key="ques.id">
            <h1>{{ ques.question }}</h1>
            <p>{{ ques.answer }}</p>
          </div>
          <div class="collapse_wrapper">
            <p class="collapse" @click.prevent="expandFaqs">
              {{ visibles === 3 ? 'развернуть' : 'свернуть' }} все
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { questions } from '~/assets/data';
  
  const visibles = ref(3);
  const allQuestions = ref(questions);
  
  const expandFaqs = () => {
    visibles.value === 3 ? visibles.value = allQuestions.value.length : visibles.value = 3;
    const faqRef = document.querySelector('.faq');
    faqRef.scrollIntoView({ behavior: 'smooth' });
  };
  
  // const handleMouseMove = (event) => {
  //   const questionMark1 = document.querySelector('.question_mark1');
  //   const questionMark2 = document.querySelector('.question_mark2');
  //   const { clientX: x, clientY: y } = event;
  //   questionMark1.style.transform = `translate(${(x - window.innerWidth / 2) * 0.05}px, ${(y - window.innerHeight / 2) * 0.05}px)`;
  //   questionMark2.style.transform = `translate(${(x - window.innerWidth / 2) * 0.05}px, ${(y - window.innerHeight / 2) * 0.05}px)`;
  // };
  
  onMounted(() => {
    // document.addEventListener('mousemove', handleMouseMove);
  });
  
  </script>
<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    background-image: url(~/assets/images/faq/faqbg.png);
    padding-top: 124px;
    padding-bottom: 170px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.938);

    .question_mark1 {
        position: absolute;
        left: 45px;
        bottom: 50px;

        @media (max-width: 1150px) {
            width: 75px;
            left: 60px;
            bottom: 50px;
        }
    }

    .question_mark2 {
        position: absolute;
        right: 51px;
        top: 50px;

        @media (max-width: 1150px) {
            width: 50px;
            right: 51px;
            top: 20px;
        }
    }

    .faq {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 20px;

        .collapse_wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p.collapse {
                text-align: center;
                font-family: 'Roboto';
                cursor: pointer;
                color: white;
                padding: 10px 15px;
                background: linear-gradient(180deg, rgba(207, 0, 0, 0.87) 0%, rgba(101, 0, 0, 0.87) 100%);
                backdrop-filter: blur(3.2123777866363525px);
                font-size: 18px;
                border-radius: 10px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        &_card {
            width: calc(100% / 3 - 15px);
            height: 285px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            border-radius: 15px;
            background: var(--flags-color);
            box-shadow: inset 0px 0px 31.6px 0px rgba(0, 0, 0, 0.7);
            gap: 20px;
            padding: 1rem;
            min-width: 250px;
            z-index: 2;
            flex-grow: 1;

            h1 {
                color: #FFF;
                text-align: center;
                font-family: "Another Danger";
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 4.4px;
                max-width: 382px;

                @media (max-width: 550px) {
                    font-size: 18px;
                }
            }

            p {
                color: #FFF;
                text-align: center;
                leading-trim: both;
                text-edge: cap;
                font-family: 'Roboto';
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                max-width: 382px;

                @media (max-width: 550px) {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>