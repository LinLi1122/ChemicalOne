<template>
   <v-sheet >
    <Toolbar6 is-fluid />
     <Tabs1 :productList="ProductList" v-if="ProductList" />
      <Footer4Demo/>
 </v-sheet>
</template>

<script>
import Toolbar6 from '@/components/ui/landing/toolbar/Toolbar3.vue'
import Tabs1 from '@/components/ui/vuetify/components/Tabs1Demo.vue'
import Footer4Demo from '@/components/ui/landing/footer/Footer4Demo.vue'
// import Logos1Demo from '@/components/ui/landing/logos/Logos3Demo.vue'
import Card1Demo from '@/components/ui/landing/card/Card1Demo.vue'
import { productList as ProductList } from './product.js'


export default {
   data() {
    return {
    ProductList
    }
  },
  
  components: {
    Toolbar6,
    Tabs1,
    Footer4Demo,
    Card1Demo
   
  },
 
  

}
</script>

