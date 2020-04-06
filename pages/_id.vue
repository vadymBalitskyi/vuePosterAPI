<template lang="pug">
    v-container
        v-row(
            v-show="Object.keys(movie).length > 0"
            class="poster")
            v-col(md="3" sm="5" xs="12")
                v-card
                    v-img(
                        class="white--text align-end"
                        :src="getImgUrl( movie['poster_path'] )")
            v-col(mm="9" sm="7" xs="12")
                v-row
                    v-col(class="display-1")
                        span {{movie['title']}}
                v-row(
                    justify="space-between"
                    align="center"
                    class="mx-0 pb-3")
                    div(class="d-flex")
                        v-rating(
                            :value="divideByTwo(movie['vote_average'])"
                            length="5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14")
                        div(class="grey--text ml-4") {{divideByTwo(movie['vote_average'])}} ({{movie['vote_count']}})
                v-row(justify="start")
                    v-col(class="py-0")
                        span(class="subtitle-1") genre:
                        span(
                            v-for="(category, index) of movie['genres']"
                            :key="index") {{category.name}}{{index != movie['genres'].length - 1 ? ', ' : ' '}}
                v-row
                    v-col(class="py-0")
                        span(class="subtitle-1") duration:
                        span {{movie['runtime']}} min
                v-row
                    v-col(class="py-0")
                        span(class="subtitle-1") country:
                        span(
                            v-for="(country, index) of movie['production_countries']"
                            :key="index") {{country.name}}{{index != movie['production_countries'].length - 1 ? ', ' : ' '}}
                v-row
                    v-col(class="py-3") {{movie['overview']}}
</template>

<script>
    import axios from 'axios'
    import {
        key,
        getImgUrl,
        divideByTwo
    } from '@/plugins/helpers'

    export default {
        name: 'movie',
        data() {
            return {
                id: this.$route.params.id,
                page: 1,
                movie: {},
                key
            }
        },
        computed: {
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
            getImgUrl,
            divideByTwo,
            async loadData() {
                const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.key}`;

                this.spinner = true;

                await axios({
                    method: 'GET',
                    url,
                    responseType: 'json',
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                }).then(resp => {
                    this.movie = resp.data;
                }).catch(err => {
                    console.log(err);
                }).finally(() => {
                    this.spinner = false;
                });
            }
        },
        created() {
            this.loadData()
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
