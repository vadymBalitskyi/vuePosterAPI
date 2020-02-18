<template lang="pug">
  v-app(class="app")
    Header
    main(class="main")
      nuxt
      Spinner
    Footer
</template>
<script>
  import Header   from '~/components/main/Header';
  import Footer   from '~/components/main/Footer';
  import Spinner  from '~/components/Spinner';

  export default {
    components: {
      Header,
      Footer,
      Spinner
    }
  }
</script>
<style lang="scss">
  @import '~/assets/styles/main';
  .app {
    display: flex;
    flex-direction: column;
  }
  .main {
    flex: 1 0 auto;
    padding-bottom: 50px;
  }
  //It pins the footer to bottom
  .footer {
    flex-shrink: 0;
  }
</style>

