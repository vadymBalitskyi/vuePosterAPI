import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {key} from '@/plugins/helpers'

Vue.use(Vuex);

export const strict = false;

export const state = () => ({
    movies: [],
    page: 1,
    totalPages: 0,
    spinner: false
});

export const mutations = {
    setMovies(state, payload) {
        state.movies = payload;
    },
    setPage(state, payload) {
        state.page = payload;
    },
    setTotalPages(state, payload) {
        state.totalPages = payload;
    },
    setSpinner(state, payload) {
        state.spinner = payload;
    },
};
export const actions = {
    async loadMovies({commit, state}) {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&certification_country=US&certification.lte=G&sort_by=popularity.desc&page=${state.page}`;

        commit('setSpinner', true);

        await axios({
            method: 'GET',
            url,
            responseType: 'json',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }).then(resp => {
            const {page, total_pages, results} = resp.data;
            commit('setMovies', results);
            commit('setPage', page);
            commit('setTotalPages', total_pages);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            commit('setSpinner', false);
        });
    }
}