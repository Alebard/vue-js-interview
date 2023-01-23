import {defineStore} from "pinia";

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        scoreFilters: ['> 20', '< 10'],
        countryFilters: ['russia', 'usa'] ,
        activeScoreFilter: null,
        activeCountryFilter: null,
    }),
})
