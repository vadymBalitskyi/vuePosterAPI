<template lang="pug">
  v-card
    v-footer(
      absolute
      class="footer"
      color="primary")
      v-col(
        class="text-center"
        cols="12"
        ) &#169; {{ new Date().getFullYear() }} Balitskyi
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer {
      color: #fff;
  }
</style>
