<template>

  <v-card outlined flat width="450" class="h-full d-flex flex-column backgrond mx-auto hero9-bg " theme="dark" > 
    <v-card-title class="font-weight-bold  ">
    
    </v-card-title>
    <v-card-text >
     <div class="text-right TextC">
    <v-btn
      color="#1b4f7c"
      @click="sheet = !sheet"
    >
     <div class="text-Right TextA font-weight-bold  ">
         Get Insert
      </div>

    </v-btn>

    <v-bottom-sheet v-model="sheet" inset>
      <v-card
        class="text-center"
        max-height="200"
      >
        <v-card-text>
          <v-btn
            variant="text"
            @click="sheet = !sheet"
          >
            close
          </v-btn>

          <br>
          <br>

          <div>
          Within a few days it will be available 
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
  

      <div class="flex-column "  >
        <div class="text-h3 text-lg-h4 mt-0 mt-xl-10 text-center TextB font-weight ">
        {{    Name.Name }}  
      </div>
      </div>
     
  
        <v-divider></v-divider>

       <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr class="heder">
            <th >Code</th>
            <th >Unit</th>
          </tr>
        </thead>
        <tbody >
          <tr class=" font-weight-bold odd ">
            
            <td class="font-weight-bold" > {{ Name.Code }}</td>
            <td class="font-weight-bold">{{ Name.Unite }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
      
    </v-card-text>
 
  </v-card>
</template>

<script>
export default {
  props: {
    Name:Array,
    

  },
  data(){
    return{
       sheet: false,
    }
  }
}
</script>
<style  scoped>
.TextA{
  color: aliceblue;
}
.TextB{
 color: #c0253c;


}
.backgrond{
  background-color: "transparent" ;

}
.heder{
    width:300%;
    height: 100%;
    background-size: cover;
    background-image: url("/images/BG1.PNG"); 
    background-size: cover;
    background-position: center;

  
}
.odd{
  background-color: #1b4f7c;
  color: rgb(246, 240, 240);
  padding: 1cm;
}
.even{
  background-color: #1b4f7c;
  color: rgb(246, 240, 240);

}
.TextC{
  padding-bottom:.5cm ;
}
.hero9-bg {
  width:100%;
    height: 100%;
    /* background-size: cover; */
    
  background-image: url("/images/BG1.PNG"); 
  background-size: cover;
  background-position: center;
}
</style>