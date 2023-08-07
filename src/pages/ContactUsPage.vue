<template>
   <v-sheet color="transparent">
    <Toolbar6 is-fluid />
    <Contact2Demo/>
    <Footer4Demo/>

  </v-sheet>
</template>

<script>
import Toolbar6 from '@/components/ui/landing/toolbar/Toolbar3.vue'
import Contact2Demo from '@/components/ui/landing/contact/Contact2Demo.vue'
import Footer4Demo from '@/components/ui/landing/footer/Footer4Demo.vue'


export default {
  components: {
    Toolbar6,
    Contact2Demo,
    Footer4Demo,
  
  }

}
</script>

<style scoped>


</style>