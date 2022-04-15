<template>
  <v-app>
    <v-card
      class="mx-auto overflow-hidden"
      color="grey lighten-4"
      flat
      width="100%"
      height="100%"
      tile
    >
      <v-toolbar color="primary lighten-4" dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- Judul -->
        <v-toolbar-title>News</v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- kolom pencarian -->
        <v-col cols="12" md="2">
          <v-text-field
            v-model="search"
            label="search"
            v-show="isSearch"
          ></v-text-field>
        </v-col>
        <v-btn icon>
          <v-icon @click="isSearch = !isSearch">mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>
      <!-- navigasi kiri -->
      <v-navigation-drawer v-model="drawer" absolute left temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    John Leider
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >john@vuetifyjs.com</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <!-- isi list -->
            <v-list>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-avatar>
                  <v-img
                   :image="item.avatar"
                  ></v-img>
                   </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- isi konten -->
      <v-main>
        <v-container>
           <router-view/>
        </v-container>
      </v-main>
    </v-card>
 <!-- footer -->
   <v-footer padless>
    <v-col
    color="grey lighten-4"
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    search: "",
    isSearch: false,
    selectedItem: 0,
    items: [
      { text: "My Files", icon: "https://cdn.vuetifyjs.com/images/1.png" },
      {
        text: "Shared with me",
        icon: "https://cdn.vuetifyjs.com/images/2.png",
      },
      { text: "Starred", icon: "https://cdn.vuetifyjs.com/images/3.png" },
      { text: "Recent", icon: "https://cdn.vuetifyjs.com/images/4.png" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  component: {
    HomeView,
  },
};
</script>
