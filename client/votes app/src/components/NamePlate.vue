<template>
    <span :title="voter.name">{{voter.name}}</span>
</template>

<script>
    export default {
        name: "NamePlate",
        props: {
            voter: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/styles/_colors";
    @import "~@/styles/_typography";

    span {
        display: block;
        background-color: $light-color;
        border-radius: 5px;
        @include button-font;
        padding: 1rem;
        text-align: center;
        color: $white;
        transition: all 0.2s;
        margin-bottom: 0.5rem;
        max-width: 30rem;
        &:hover {
            background-color: lighten($light-color, 10%);
        }
    }
</style>
