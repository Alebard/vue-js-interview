<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list three-line>
        <UsersBlockHeader />
        <UsersList v-if="!isLoading && usersList.length"  />
        <div class="d-flex justify-center" v-else>
          <v-progress-circular indeterminate/>
        </div>
      </v-list>
    </v-card>
    <v-card-actions class="justify-center">
      <v-btn @click="loadUsers">Load users</v-btn>
    </v-card-actions>
  </v-col>

</template>

<script>
import UsersBlockHeader from "@/components/UsersBlockHeader";
import UsersList from "@/components/UsersList";
import {mapWritableState} from "pinia";
import {useFiltersStore} from "@/store/filters";
import {useUsersStore} from "@/store/users";
import api from "@/api";
import helpers from "@/helpers/helpers";

export default {
  name: "UsersBlock",
  components: {UsersList, UsersBlockHeader},
  data: () => ({
    isLoading: false,
  }),
  computed: {
    filterProperties() {
      return `${this.activeScoreFilter}|${this.activeCountryFilter}`;
    },

    ...mapWritableState(useFiltersStore, ['activeScoreFilter', 'activeCountryFilter']),
    ...mapWritableState(useUsersStore, ['usersList'])
  },
  watch: {
    filterProperties() {
      this.emulateLoading()
    },
  },
  methods: {
    emulateLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      },1000)
    },

    async loadUsers() {
      const usersFetching = await api.Users.fetchUsers();
      const newUsers = helpers.addDataUsers(usersFetching);
      this.usersList = this.usersList.concat(newUsers);
    },
  },
  beforeMount() {
    this.loadUsers();
  }
}
</script>

<style scoped>

</style>
