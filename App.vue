<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import config from './configs'

/*
|---------------------------------------------------------------------
| Main Application Component
|---------------------------------------------------------------------
*/
export default {
  head: {
    link: [
      // adds config/icons into the html head tag
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  }
}
</script>
