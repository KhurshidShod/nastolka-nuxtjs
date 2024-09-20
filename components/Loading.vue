<template>
  <div class="loading">
    <div class="fingerprint"></div>
    <h1>
      Опрос <span>свидетелей...</span>
    </h1>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  gap: 3rem;
  text-align: center;
  padding: 1rem;
  overflow: hidden;

  h1 {
    font-size: 45px;
    font-family: 'Another Danger';
    letter-spacing: 5px;
    letter-spacing: 10px;
    color: white;

    @media (max-width: 650px) {
      font-size: 32px;
    }

    @media (max-width: 650px) {
      letter-spacing: 4px;
    }

    span {
      color: #980735;
      ;
    }
  }

  .fingerprint {
    position: relative;
    width: 250px;
    height: 250px;
    background-image: url(~/assets/images/loading/finger-white.png);
    background-size: 200px;
    background-repeat: no-repeat;
    background-color: transparent;

    @media (max-width: 650px) {
      background-size: 170px;
      width: 200px;
      height: 200px;
    }

    @media (max-width: 450px) {
      background-size: 170px;
      width: 150px;
      height: 150px;
      background-size: 120px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(~/assets/images/loading/finger-red.png);
      background-size: 200px;
      background-color: transparent;
      background-repeat: no-repeat;
      animation: animateFingerprint 4s ease-in-out infinite;

      @media (max-width: 650px) {
        background-size: 170px;
      }

      @media (max-width: 450px) {
        background-size: 120px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 8px;
      background: #980735;
      border-radius: 8px;
      filter: drop-shadow(0 0 20px #980735) drop-shadow(0 0 60px #980735);
      animation: animateLine 4s ease-in-out infinite;

      @media (max-width: 650px) {
        width: 85%;
      }

      @media (max-width: 450px) {
        width: 80%;
      }
    }
  }
}

@keyframes animateFingerprint {

  0%,
  100% {
    height: 0%;
  }

  50% {
    height: 100%;
  }
}

@keyframes animateLine {

  0%,
  100% {
    top: 0%;
  }

  50% {
    top: 100%;
  }
}
</style>
