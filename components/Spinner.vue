<template lang="pug">
  div
    div(
    v-if="spinner"
    class="spinner text-center")
      v-progress-circular(
      :size="70"
      :width="7"
      color="secondary"
      indeterminate)
</template>

<script>
  export default {
    name: 'spinner',
    computed: {
      spinner() {
        return this.$store.state.spinner;
      }
    }
  }
</script>

<style lang="scss" scoped>
/* purgecss start ignore */

    .spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
/* purgecss end ignore */

</style>
