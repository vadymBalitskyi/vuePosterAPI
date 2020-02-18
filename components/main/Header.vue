<template lang="pug">
  section(class="wrap")
    v-container
      header(class="header d-flex justify-space-between")
        nuxt-link(to="/" class="logo") MOVIES
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="scss" scoped>
  $white: #fff;
  .wrap {
    width: 100%;
    background-color: #081c24;
  }
  .header {
    a {
      text-decoration: none;
    }
    .logo{
      padding: 10px;
      color: $white;
    }
  }
</style>
