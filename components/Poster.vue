<template lang="pug">
    v-hover(v-slot:default="{ hover }")
        v-card(
            class="poster mx-auto"
            :elevation="hover ? 8 : 2")

            nuxt-link(:to="`/${poster['id']}`")
                v-img(
                    class="white--text align-end"
                    max-height="300"
                    :src="getImgUrl(poster['poster_path'])")

            nuxt-link(:to="`/${poster['id']}`")
                v-card-title(
                    class="poster__title pb-0"
                    v-html="poster['title']")

            v-card-text(class="py-3")
                v-row(
                    justify="space-between"
                    align="center"
                    class="mx-0")
                    div(class="d-flex")
                        v-rating(
                            :value="(divideByTwo(poster['vote_average']))"
                            length="5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14")
                        div(class="grey--text ml-4") {{divideByTwo(poster['vote_average'])}} ({{poster['vote_count']}})
                    div
                        v-btn(
                            icon
                            @click="show = !show")
                            v-icon {{show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}

            v-expand-transition
                div(v-show="show")
                    v-divider
                    v-card-text(class="text--primary")
                        div(v-html="truncate(poster['overview'])")
</template>

<script>
    import {
        truncate,
        getImgUrl,
        divideByTwo
    } from '@/plugins/helpers'

    export default {
        name: "Poster",
        props: {
            poster: {
                type: Object,
                required: true
            }
        },
        data: () => ({
            show: false
        }),
        methods: {
            truncate,
            getImgUrl,
            divideByTwo
        }
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    .poster {
        &__title {
            align-items: flex-start;
            height: 78px;
            overflow: hidden;
        }
    }
</style>
