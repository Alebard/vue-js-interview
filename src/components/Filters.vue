<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-select

        v-model="activeCountryFilter"
        :items="countryFilters"
        clearable
        label="Filter by country"
    ></v-select>

    <v-select
        v-model="activeScoreFilter"
        :items="scoreFilters"
        clearable
        label="Filter by score"
    ></v-select>
  </v-col>
</template>

<script>
import {mapWritableState} from "pinia";
import {useFiltersStore} from "@/store/filters";

export default {
  name: "Filters",
  computed: {

    ...mapWritableState(useFiltersStore, ['scoreFilters', 'countryFilters', 'activeScoreFilter', 'activeCountryFilter'])
  }
}
</script>

<style scoped>

</style>
