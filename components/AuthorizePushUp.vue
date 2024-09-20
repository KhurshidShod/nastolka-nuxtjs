<template lang="">
    <div class="pushup">
        <div class="pushup_inner">
            <img class="lupa" src="~/assets/images/best-detectives/d25914a2a059b9bdc9a4eb22ac03c56d.png" alt="">
            <img @click="$emit('close-pushup')" class="close" src="~/assets/icons/nav-close.svg" alt="">
            <h1>Присоединяйтесь к нашим детективам прямо сейчас</h1>
            <a href="https://t.me/rouqot" target="_blank">Авторизоваться</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.pushup {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 9999999;
    backdrop-filter: blur(5px);
    padding: 30px;

    &_inner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 4rem;
        background-color: var(--bg-color);
        border-radius: 30px;
        gap: 2rem;
        box-shadow: 0px 0px 51.6px 30px rgba(0, 0, 0, 0.45);

        @media (max-width: 700px) {
            padding: 3rem;
        }

        img.lupa {
            position: absolute;
            width: 200px;
            height: 200px;
            right: 0%;
            top: 10%;

            @media (max-width: 900px) {
                width: 150px;
                height: 150px;
                right: 5%;
            }

            @media (max-width: 700px) {
                width: 100px;
                height: 100px;
                right: 10%;
                top: 15%;
            }

            @media (max-width: 550px) {
                right: 5%;
                top: 20%;
            }
        }

        img.close {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 25px;
            right: 25px;
            cursor: pointer;
        }

        h1 {
            font-size: 32px;
            letter-spacing: 5px;
            max-width: 600px;
            text-align: center;
            color: white;
            font-family: 'Another Danger';

            @media (max-width: 900px) {
                font-size: 26px;
            }

            @media (max-width: 700px) {
                font-size: 22px;
                max-width: 100%;
            }

            @media (max-width: 550px) {
                font-size: 16px;
                max-width: 100%;
            }
        }

        a {
            margin-top: 2rem;
            display: inline-flex;
            padding: 14px 30px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 11px;
            background: linear-gradient(180deg, #CF0000 0%, #650000 100%);
            color: #FFF;
            text-align: center;
            font-family: 'Roboto';
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            transition: .3s linear;

            &:hover {
                box-shadow: 0px 0px 45px 0px #9E0B0B;
            }

            @media (max-width: 450px) {
                width: 80%;
                margin-top: 1rem;
                font-size: 14px;
                padding: 8px 14px;
            }

            @media (max-width: 900px) {
                padding: 14px 25px !important;
                font-size: 24px !important;
            }

            @media (max-width: 700px) {
                padding: 12px 18px !important;
                font-size: 16px !important;
            }
        }
    }
}
</style>