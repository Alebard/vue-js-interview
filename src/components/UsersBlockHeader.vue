<template>
  <v-subheader
      v-if="header"
      v-text="header"/>
</template>

<script>

export default {
  name: "UsersBlockHeader",
  data: () => ({
    header: 'List',
  }),
}
</script>

<style scoped>

</style>
