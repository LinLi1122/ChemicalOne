<template>
  <v-container  fluid class="TextBackgrund">
    <!-- <h2 class="text-h1 text-Right white--text font-weight " v-if="Tab">{{Tab}}</h2> -->
    <!-- <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field> -->
         <div class="d-flex flex-column flex-md-row  ">
      <div class="w-full w-md-half d-flex align-center">
        <div class="pa-6 pa-md-12">
            <a :href="Catalogue" class="text-decoration-none secondary--text text--lighten-2">

     <v-btn class="ma-2" outlined  large color="#1b4f7c">
       
       Catalogue
       </v-btn>
            </a>

  
          <h2 class="text-h3 text-lg-h2 mt-0 mt-xl-10 text-Right  font-weight TextBackgrund " v-if="Tab">{{Tab}}</h2>
          <div class="font-weight-bold text-lg-h5 mt-5 Textcolor " v-if="Text">{{Text}}</div>
          <div class="mt-4">
            <router-link to="#" class="text-decoration-none font-weight-bold text-h6 mt-3"> </router-link>
          </div>
        </div>
      </div>
      <div class="w-full w-md-half">
          <v-img  
          :src="require(`@/assets/images/categories/${image}`)"
          v-if="image!=='Ch.png'"
         class="img " alt="">
         </v-img>
      <v-img  
          :src="require(`@/assets/images/categories/${image}`)"
          v-else
         :width="400"
         class="img " alt="">
         </v-img>
         
    
      </div>
    </div>
    <v-row v-if="Tab!='HEMATOLOGY REAGENTS KIT'">
      <v-col  v-for="(open, i) in Tayp" :key="i" cols="12" md="3"   >
      <Card1 v-bind="open"  />
      </v-col>
    </v-row>
    <v-col v-if="Tab=='HEMATOLOGY REAGENTS KIT'">
     <v-row  v-for="(open, i) in Tayp" :key="i" >
       
       <v-col class=" Text font-weight-bold text-h6 text-lg-h5 " cols="12" md="12" v-if="open.DESCRIPTION[1] ">
         {{open.DESCRIPTION[0]}}</v-col>
       <v-col class="text font-weight-bold text-h6 text-lg-h5 " cols="12" md="12" v-if="open.part ">{{open.part}}</v-col>
    
     <v-col v-for="(SS ,ii) in open.Name" :key="ii">

       <Card1Hem :Name="SS"/>
     </v-col>
      </v-row>

    </v-col>
  </v-container>
</template>

<script>
import Card1 from '@/components/ui/landing/card/Card1.vue'
import Card1Hem from '@/components/ui/landing/card/Card1Hem.vue'




export default {
  watch: {
    // whenever question changes, this function will run
    //  search(newQuestion, oldQuestion) {
    //   if (oldQuestion !== '') {
    //     console.log(newQuestion)
    //     this.Tayp=[]
    //     this.Tayp=this.productList
        
    //   }
    // }
  },
  
  mounted() {

    const arr =[];
    for (let u = 0; u < this.productList.length; u++) {
    const element = this.productList[u].tags[0];
     if(element===this.Tab){
       this.Tayp.push(this.productList[u])
      // Console.log(this.Tayp)
      }
      
  }
    
  },
  
  props: {
    Tab: String,
    productList:Array,
    Text:String,
    image:String,
    Catalogue:String

  },
  components: {
    Card1,
Card1Hem

  },
  data() {
    return {

      Tayp:[],
      search:""
     
    }
  
  },
}
</script>
<style  scoped>
.TextBackgrund{
  background-color: #ffffff;
}

.img{
 
  justify-items: right;
  margin: 2cm;
  
}
.TextBackgrund{
  color: #c0253c;
}
.Textcolor{
color: #1b4f7c;
}
.Text{
background-color: #f0aa45;
text-align: center;
margin-bottom: 1cm;
color: black;
height: 5ch;
}
.text{
  background-color: #138944;
  color: #ffffff;
text-align: center;
height: 5ch;


}
.TextA{
  color: aliceblue;
}
</style>