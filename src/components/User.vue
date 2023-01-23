<template>
  <div>
    <v-list-item>
      <v-list-item-avatar @click="toggleOpenInfo">
        <v-img :src="user.image"/>
      </v-list-item-avatar>

          <v-list-item-content v-if="!isOpenInfo">
            <v-list-item-title v-html="user.firstName"/>
            <v-list-item-subtitle v-html="user.university"/>
          </v-list-item-content>

          <v-list-item-content v-if="isOpenInfo"
                               v-text="user.address.address"/>

    </v-list-item>

    <v-divider v-if="dividerRequired"
               inset />
  </div>
</template>

<script>

export default {
  name: "User",
  data: () => ({
    isOpenInfo: false,
  }),
  props: {
    user: Object,
    dividerRequired: Boolean
  },
  methods: {
    toggleOpenInfo() {
      this.isOpenInfo = !this.isOpenInfo;
    }
  }
}
</script>

<style scoped>
.v-avatar .v-image {
  cursor: pointer;
}
</style>
