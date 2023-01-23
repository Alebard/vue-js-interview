<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <Logo />
      <Filters />
      <UsersBlock />
    </v-row>
  </v-container>
</template>

<script>
  import Logo from "@/components/Logo";
  import Filters from "@/components/Filters";
  import UsersBlock from "@/components/UsersBlock";

  export default {
    name: 'ContentBlock',
    components: {UsersBlock, Filters, Logo},
  }
</script>
