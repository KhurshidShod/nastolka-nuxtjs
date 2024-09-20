<template lang="">
    <button :style="{
        'padding-inline': padInline + 'px',
        'padding-block': padBlock + 'px',
        'font-size': fontSize + 'px'
    }" class="main_button">{{ text }}</button>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        padInline: {
            type: Number,
            required: true
        },
        padBlock: {
            type: Number,
            required: true
        },
        fontSize: {
            type: Number,
            required: true
        },
    }
}
</script>
<style lang="scss" scoped>
button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 11px;
    background: var(--color-red);
    color: #FFF;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
    transition: .3s linear;

    &:hover {
        box-shadow: 0px 0px 45px 0px #9E0B0B;
    }

    @media (max-width: 900px) {
        padding: 16px 22px !important;
        font-size: 24px !important;
    }

    @media (max-width: 700px) {
        padding: 12px 18px !important;
        font-size: 16px !important;
    }
}
</style>