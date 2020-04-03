<template lang="pug">
    div(
        v-if="spinner"
        class="spinner text-center")
        v-progress-circular(
            :size="70"
            :width="7"
            color="primary"
            indeterminate)
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'spinner',
        computed: mapState(['spinner'])
    }
</script>

<style lang="scss" scoped>
    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
