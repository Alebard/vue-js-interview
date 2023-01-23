<template>
  <div>
    <User v-for="(user, index) in filteredUsersList"
          :key="user.title"
          :user="user"
          :dividerRequired="index < filteredUsersList.length - 1"/>
  </div>
</template>

<script>
import {mapWritableState} from "pinia/dist/pinia";
import {useFiltersStore} from "@/store/filters";
import {useUsersStore} from "@/store/users";
import User from "@/components/User";

export default {
  name: "UsersList",
  components: {User},
  computed: {
    filteredUsersList() {
      let users = this.usersList;
      if(this.activeScoreFilter) {
        users = users.filter(user => eval(user.score + this.activeScoreFilter))
      }
      if(this.activeCountryFilter) {
        users = users.filter(user => eval(user.country === this.activeCountryFilter))
      }

      return users
    },

    ...mapWritableState(useFiltersStore, ['activeScoreFilter', 'activeCountryFilter']),
    ...mapWritableState(useUsersStore, ['usersList'])
  },
}
</script>

<style scoped>

</style>
