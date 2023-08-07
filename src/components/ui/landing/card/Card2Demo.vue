<template>
  <v-sheet class="transparent">
    <v-container class="py-12 ">
      <v-row>
        <v-col class="w-full w-md-half ">
          <!-- card example -->
           <v-img   :src="require('@/assets/images/US.png')"
          :max-height="$vuetify.breakpoint.mdAndUp ? '400' : '300'"
           class="img " alt="">
         </v-img>
        
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import Card2 from '@/components/ui/landing/card/Card2.vue'

export default {
  components: {
    Card2
  },
  data() {
    
  }
}
</script>
<style  scoped>
.img{
  height: 500px;
  width: 500px;
  justify-items: right;
  margin-bottom: 2cm;
  
}
</style>