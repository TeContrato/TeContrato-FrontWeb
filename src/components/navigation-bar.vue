<template>
  <v-card>
    <v-app-bar
        color="blue darken-4"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Te Contrato</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        height="780"
    >
      <v-list
          nav
          dense
      >

        <v-list-item

            v-for="item in items"
            :key="item.title"
            :to = "item.to"
            link
        >
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  name: "navigation-bar",
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/dashboard' },
      { title: 'Projects', icon: 'mdi-briefcase-search', to: '/projects' },
      { title: 'Settings', icon: 'mdi-cog-outline', to: '/Setting' },
      { title: 'Log out', icon: 'mdi-logout-variant', to: '/' },
    ],
  }),
}


</script>

<style scoped>
</style>
