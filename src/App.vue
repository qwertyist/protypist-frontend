<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.path">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link
          to="/"
          style="cursor: pointer"
          class="text-uppercase header"
          custom
          v-slot="{ navigate }"
        >
          <span @click="navigate" @keypress.enter="navigate" role="link"
            >Skrivtolkning
            <span class="font-weight-thin">På distans</span></span
          >
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      on: {},
      sidebar: false,
      selectedItem: null,
      menuItems: [
        { icon: "mdi-home", path: "/", title: "Hem" },
        { icon: "mdi-connection", path: "/join", title: "Anslut" },
        { icon: "mdi-cog", path: "/settings", title: "Inställningar" },
        { icon: "mdi-help", path: "/help", title: "Hjälp" },
      ],
    };
  },
  mounted() {

  }
};
</script>
