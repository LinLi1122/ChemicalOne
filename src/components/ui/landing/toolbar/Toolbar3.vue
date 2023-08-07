<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader  class="text-uppercase font-weight-bold Hero9-bg">Menu</v-subheader>
        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.link">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
       
      </template>
    </v-navigation-drawer>

    <v-btn
      class="d-md-none drawer-button"
      rounded
      @click="drawer = !drawer"
    >
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-app-bar flat height="100" color="transparent">
      <v-container class="py-0 px-0 px-sm-2 fill-height ">
        <router-link to="/" class="d-flex align-center text-decoration-none mr-2 toolbar3-min-width #1b4f7c">
          <img src="@/../favicon.png" alt="diazone" height="60" >
          <!-- <span class="font-weight-black text-uppercase">
            diazone
          </span> -->
        </router-link>

        <v-spacer></v-spacer>

        <div >
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            :to="item.link"
            text
            color="#1b4f7c"
            
          >
            {{ item.title }}
          </v-btn>
        </div>

        <v-spacer></v-spacer>
<div class="toolbar3-min-width text-right">
         
        </div>
        <div class="toolbar3-min-width text-right">
         
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { menu2 as menu } from './menus.js'

export default {
  data() {
    return {
      drawer: null,
      menu
    }
  }
}
</script>

<style scoped>
.drawer-button {
  position: fixed;
  top: 64px;
  bottom: 100px;
  left: -22px;
  z-index: 6;
}

.toolbar3-min-width {
  min-width: 130px;
}
.hero9-bg {
  background-image: url("/images/BG1.PNG");
  background-image: linear-gradient(
      to bottom right,
      rgba(16 57 92 / 7%),
      rgba(0 0 0 / 0.9)
    );
  background-size: cover;
  background-position: center;
}
</style>

