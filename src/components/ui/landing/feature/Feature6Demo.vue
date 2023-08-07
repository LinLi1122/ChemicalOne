<template>
<v-sheet>
 <Toolbar3/>
  <v-sheet class="hero9-bg" >
  <Feature6 />
  </v-sheet>
</v-sheet>
</template>

<script>
import Feature6 from '@/components/ui/landing/feature/Feature6.vue'
import Toolbar3 from '@/components/ui/landing/toolbar/Toolbar3.vue'
export default {
  components: {
    Feature6,
    Toolbar3
  }
}
</script>
<style scoped>
.hero9-bg {
  width:100%;
    height: 100%;
    background-size: cover;
    
  background-image: url("/images/BG1.PNG"); 
  background-size: cover;
  background-position: center;
}
</style>
