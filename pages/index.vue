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
                    Poster(:poster="movie")

            v-row(v-if="totalPages > 1")
                v-col
                    Pagination
</template>

<script>
    import {key} from '@/plugins/helpers'
    import Search from '@/components/Search'
    import Poster from '@/components/Poster'
    import Pagination from '@/components/Pagination'

    export default {
        name: 'index',
        data: () => ({
           key
        }),
        components: {
            Search,
            Poster,
            Pagination
        },
        computed: {
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
        watch: {
            page() {
                this.$store.dispatch('loadMovies');
            }
        },
        created() {
            this.$store.dispatch('loadMovies');
        }
    }
</script>


