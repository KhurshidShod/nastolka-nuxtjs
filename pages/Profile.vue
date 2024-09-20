<template lang="">
    <section>
        <div class="container">
            <div class="passed_games">
                <div class="games">
                    <div class="game">
                        <FinishedTime />
                        <div class="game_info">
                            <div class="game_info__image">
                                <img class="game_image" src="~/assets/images/profile/185480d0cf28dd4355da38b3223e42a5.png" alt="">
                                <img class="raskrito" src="~/assets/images/profile/raskrito.png" alt="">
                            </div>
                            <div class="game_info__text">
                                <h2>Загадочное убийство на вилле Кортни</h2>
                                <p>здесь можно вставить краткое описание сюжета конкретной игры</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
section {
    width: 100%;
    padding: 220px 5rem;
    background: url(~/assets/images/handbg.png) rgb(24, 24, 24) 50% / cover no-repeat;

    @media (max-width: 1100px) {
        padding: 220px 0;
    }

    .passed_games {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .games {
            width: 85%;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;

            @media (max-width: 750px) {
                width: 100%;
            }

            .game {
                width: 100%;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 3rem;
                border-radius: 55px;
                background: #222;
                box-shadow: 0px 0px 26.706px 0px rgba(0, 0, 0, 0.45) inset;

                @media (max-width: 1100px) {
                    padding: 2rem;
                }

                @media (max-width: 750px) {
                    padding: 1rem;
                }



                &_info {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 60px;
                    gap: 90px;

                    @media (max-width: 1150px) {
                        gap: 50px;
                    }

                    @media (max-width: 900px) {
                        gap: 30px;
                    }

                    @media (max-width: 750px) {
                        flex-direction: column-reverse;
                        margin-top: 30px;
                    }

                    &__image {
                        position: relative;
                        width: 40%;
                        min-width: 300px;

                        @media (max-width: 900px) {
                            min-width: 250px;
                        }

                        @media (max-width: 750px) {
                            min-width: 0;
                            width: 100%;
                            max-height: 250px;
                        }

                        img.game_image {
                            width: 100%;
                            height: 100%;
                            border-radius: 25.354px;
                            filter: brightness(50%);

                            @media (max-width: 750px) {
                                max-height: 250px;
                            }
                        }

                        img.raskrito {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 300px;

                            @media (max-width: 750px) {
                                max-height: 250px;
                            }

                            @media (max-width: 550px) {
                                width: 100%;
                            }
                        }
                    }

                    &__text {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        gap: 1rem;

                        h2 {
                            color: #F0F0F0;
                            font-family: 'Roboto';
                            font-size: 42px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: normal;

                            @media (max-width: 900px) {
                                font-size: 28px;
                                font-weight: 900;
                            }
                        }

                        p {
                            color: #F0F0F0;
                            font-family: 'Roboto';
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 140%;

                            @media (max-width: 900px) {
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>