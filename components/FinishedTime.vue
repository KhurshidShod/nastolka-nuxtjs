<template lang="">
        <h1>ВРЕМЯ, ПРОВЕДЁННОЕ ЗА РАССЛЕДОВАНИЕМ:</h1>
                        <p class="finished_time">
                            <span>12 ч</span>
                            <span>43 мин</span>
                            <span>21 сек</span>
                        </p>
</template>
<script setup>
</script>
<style lang="scss" scoped>
h1 {
  color: #fff;
  text-align: center;
  font-family: "Another Danger";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 7.04px;

  @media (max-width: 900px) {
    font-size: 20px;
  }

  @media (max-width: 750px) {
    font-size: 14px;
    letter-spacing: 5px;
    font-weight: 700;
  }
}

p.finished_time {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 30px;
  align-items: center;
  gap: 31px;
  border-radius: 20px;
  background: linear-gradient(180deg, #cf0000 0%, #650000 100%);
  color: #fefeff;
  text-align: center;
  font-family: "Roboto";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 1rem;

  @media (max-width: 900px) {
    font-size: 22px;
    padding: 9px 15px;
    border-radius: 15px;
  }

  @media (max-width: 750px) {
    font-size: 12px;
    letter-spacing: 3px;
    padding: 5px 10px;
    gap: 15px;
    border-radius: 7px;
  }
}
</style>