<template lang="pug">
  v-container
    v-row(
      v-show="Object.keys(item).length > 0"
      class="poster")
      v-col(md="3" sm="5" xs="12")
        v-card
          v-img(
            class="white--text align-end"
            :src="getImgUrl( item['poster_path'] )")
      v-col(mm="9" sm="7" xs="12")
        v-row
          v-col(class="display-1")
            span {{item['title']}}
        v-row(
          justify="space-between"
          align="center"
          class="mx-0 pb-3")
          div(class="d-flex")
            v-rating(
              :value="(item['vote_average'])"
              length="10"
              color="amber"
              dense
              half-increments
              readonly
              size="14")
            div(class="grey--text ml-4") {{item['vote_average']}} ({{item['vote_count']}})
        v-row(justify="start")
          v-col(class="py-0")
            span(class="subtitle-1") genre:
            span(
              v-for="(category, index) of item['genres']"
              :key="index")  {{category.name}}{{index != item['genres'].length - 1 ? ', ' : ' '}}
        v-row
          v-col(class="py-0")
            span(class="subtitle-1") duration:
            span {{item['runtime']}} min
        v-row
          v-col(class="py-0")
            span(class="subtitle-1") country:
            span(
              v-for="(country, index) of item['production_countries']"
              :key="index")  {{country.name}}{{index != item['production_countries'].length - 1 ? ', ' : ' '}}
        v-row
          v-col(class="py-3") {{item['overview']}}

</template>

<script>
  import axios          from 'axios'
  import { mapState }   from 'vuex'

  export default {
    name: 'item',
    data() {
      return {
        id: this.$route.params.id,
        page: 1,
        item: {}
      }
    },
    computed: {
      ...mapState(['key']),
      spinner: {
        get() {
          return this.$store.state.spinner;
        },
        set(newValue) {
          return this.$store.commit('setSpinner', newValue);
        }
      }
    },
    methods: {
      async getData() {
        const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.key}`;

        this.spinner = true;

        await axios({
          url,
          method: 'GET',
          responseType: 'json',
          data: {},
          headers: {'content-type': 'application/x-www-form-urlencoded'},
        }).then((resp) => {
          if (resp.status === 200) {
            this.item = resp.data;
          }
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          this.spinner = false;
        });
      },
      getImgUrl(item) {
        return `https://image.tmdb.org/t/p/w500/${item}`;
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/modules/functions';

  .poster {
    h3 {
      font-size: remy(32);
    }
    .subtitle-1 {
      font-weight: 500;
    }
  }

</style>
