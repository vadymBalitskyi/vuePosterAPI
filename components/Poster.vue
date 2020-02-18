<template lang="pug">
  v-hover(v-slot:default="{ hover }")
    v-card(
      class="item mx-auto"
      :elevation="hover ? 8 : 2")

      nuxt-link(:to="`/${ item['id'] }`")
        v-img(
          class="white--text align-end"
          max-height="300"
          :src="getImgUrl( item['poster_path'] )")

      nuxt-link(:to="`/${ item['id'] }`")
        v-card-title(
          class="pb-0"
          v-html=" item['title'] ")

      v-card-text(class="py-3")
        v-row(
          justify="space-between"
          align="center"
          class="mx-0")
          div(class="d-flex")
            v-rating(
              :value="(item['vote_average'] / 2)"
              length="5"
              color="amber"
              dense
              half-increments
              readonly
              size="14")
            div(class="grey--text ml-4") {{item['vote_average']}} ({{item['vote_count']}})
          div
            v-btn(
              icon
              @click="show = !show")
              v-icon {{show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}

      v-expand-transition
        div(v-show="show")
          v-divider
          v-card-text(class="text--primary")
            div(v-html="truncate( item['overview'] )")
</template>

<script>
  export default {
    name: "Poster",
    props: {
      item: Object
    },
    data: () => ({
      show: false
    }),
    methods: {
      getImgUrl(item) {
        return `https://image.tmdb.org/t/p/w500/${item}`;
      },
      truncate(str, limit = 120) {
        return str.substring(0, (limit - 3)) + '...';
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    a {
      text-decoration: none;
    }
  }
</style>
