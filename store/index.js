import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const strict = false;

export const state = () => ({
  key: '4824fed92cd4d1e4811281fff405f758',
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
