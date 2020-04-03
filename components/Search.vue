<template lang="pug">
    v-autocomplete(
        :items="movies"
        :loading="isLoading"
        :search-input.sync="search"
        clearable
        hide-details
        item-text="title"
        item-value="id"
        label="What are you looking for?"
        solo)
</template>

<script>
    import axios from 'axios'
    import {key} from '@/plugins/helpers'

    export default {
        name: "Search",
        data: () => ({
            isLoading: false,
            search: null,
            key
        }),
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
            search(val) {
                this.searchDebounced(val);
            }
        },
        methods: {
            searchDebounced(val) {
                // cancel pending call
                clearTimeout(this._timerId);

                // delay new call 500ms
                this._timerId = setTimeout(() => {
                    this.getSearchData(val)
                }, 500)
            },
            async getSearchData(val) {
                const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=${val}`;
                const urlDefault = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${this.page}`;

                this.spinner = true;

                await axios({
                    url: (!val ? urlDefault : urlSearch),
                    method: 'GET',
                    responseType: 'json',
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                }).then((resp) => {
                    if (resp.status === 200) {
                        const {page, total_pages, results} = resp.data;
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
        }
    }
</script>
