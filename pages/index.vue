<template lang="pug">
  v-container(fluid)
    v-container
      v-row
        v-col
          Search
      v-row(wrap justify-center)
        v-col(
          v-for="(movie, index) in movies"
          :key="index"
          md="3"
          sm="4")
          Poster(:item="movie")

      v-row(v-show="totalPages > 1")
        v-col
          Pagination
</template>

<script>
  import axios          from 'axios'
  import { mapState }   from 'vuex'
  import Search         from '@/components/Search'
  import Poster         from '@/components/Poster'
  import Pagination     from '@/components/Pagination'

  export default {
    name: 'Index',
    data: () => ({}),
    components: { Search, Poster, Pagination },
    watch: {
      page() {
          this.getData()
      }
    },
    computed: {
      ...mapState({
          key: 'key',
      }),
      movies: {
        get() {
          return this.$store.state.movies;
        },
        set(newValue) {
          return this.$store.commit('setMovies', newValue);
        }
      },
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
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${this.page}`;

        this.spinner = true;

        await axios({
          url,
          method: 'GET',
          responseType: 'json',
          headers: {'content-type': 'application/x-www-form-urlencoded'},
        }).then((resp) => {
          if (resp.status === 200) {
            const { page, total_pages, results } = resp.data;
            this.movies = results;
            this.page = page;
            this.totalPages = total_pages;
          }
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          this.spinner = false;
        });
      },
    },
    created() {
      this.getData();
    }
  }
</script>

<style>

</style>

