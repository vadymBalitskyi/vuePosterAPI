<template lang="pug">
  v-pagination(
    v-model="page"
    :length="totalPages"
    :total-visible="7"
    color="secondary")
</template>

<script>
  export default {
    name: "Pagination",
    computed: {
      page: {
        get() {
          return this.$store.state.page;
        },
        set(newValue) {
          return this.$store.commit('setPage', newValue);
        }
      },
      totalPages: {
        get() {
          return this.$store.state.totalPages;
        },
        set(newValue) {
          return this.$store.commit('setTotalPages', newValue);
        }
      },
    }
  }
</script>

<style scoped>

</style>
