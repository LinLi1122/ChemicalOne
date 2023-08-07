<template>

  <v-card>
    <v-tabs
      v-model="tab"
      background-color="#1b4f7c"
      dark
      grow
    >
      <v-tab  v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>
   
    <v-tabs-items 
    
       v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
              background-color="#c0253c"
       >
        <v-card  flat class="hero9-bg">
          <!-- <v-card-text >{{ item.content }}</v-card-text> -->
        
          <card1Demo :Tab="item.tab" :Catalogue="item.Catalogue" :productList="productList" v-if="item.tab && productList" :Text="item.Text" :image="item.image" />
  <!-- <Datatable4Demo :openings="openings" v-if="item.tab && openings"/> -->
      
          </v-card>
      </v-tab-item>
    </v-tabs-items>
 
  </v-card>
</template>

<script>
// import card2Demo from '@/components/ui/landing/team/Team7Demo.vue'
import card1Demo from '@/components/ui/landing/card/Card1Demo.vue'




export default {
  props:{
    productList:Array
  },
   components: {
    card1Demo,
   

  },
  data () {
    return {
      tab: null,
      items: [
        // { tab: 'General Products', content: 'Tab 1 Content' },
        { tab: 'Biochemistry',key:'0' ,Text :`Biochemistry in clinical biology consists in measuring key
physiological parameters in blood, urine and other biological
fluids. Innovation SD presents a wide variety biochemistry kit, our
kits are known for their stability and usability. All the methods and
relevant information are available through helpful and detailed
instructions developed by professionals, our range includes
several methods: liquid -ready to use kits and powder kits, while it
can be performed manual, semi-automated and fully automated
as well.`,image:"Ch.png",Catalogue:'https://drive.google.com/file/d/1rE9llqP1Ri0gIMSkOhZk_5nJGSxYSfIS/view?usp=drive_link'  },
        { tab: 'Antibiotic Sensitivity Discs',key:'1',Text :`Antibiotic sensitivity testing (AST) specifies effective antibiotic dosage and
formulates a profile of empirical therapy for the proper management of an
individual patient's health against deadly infections.
Innovation SD provides a complete range of Antibiotic Sensitivity Disc with
different concentration, each 50 disc is placed tube along with dispenser`,image:"AntibioticSensitivityDiscs.png",
Catalogue:'https://drive.google.com/file/d/1clQRPWj9akAOqNIARI3LNV0tnjrAoDMP/view?usp=sharing'
},
        
        { tab: 'Stains',key:'2',Text :`Innovation SD recipe for Hematology, Histology and Cytology Stains has
proved its quality and stability over the years with robust packaging to
eliminate any sort of leakage.`,image:"Stains.png",Catalogue:'https://drive.google.com/file/d/1AdwYgzjGyr5Bk4f23bxGHj-K6A9Hkj3L/view?usp=sharing'   },
        { tab: 'Serology Products',key:'3',Text :`Innovation SD Latex slide test kits continue to
improve in reliability, ease of use, and types available
our range developed for the direct detection and
semi-quantitation.`,image:"ser.png",Catalogue:"https://drive.google.com/file/d/1XNBMfU4eURpEhAdOxfkQ5tBoPR1mXeel/view?usp=sharing"   },
        { tab: 'Rapid Test Products',key:'4',Text :`Innovation SD offers an extensive range of lateral flow
immunoassay tests for the rapid detection of antibodies and
antigens in human samples (blood, serum, plasma, urine, oral
swabs, nasal swabs, and feces). This range includes Fertility test,
Infectious disease test, sexually transmitted disease.
Tumor
marker and others, can be supplied as cassette, strip and
midstream.
Also Innovation SD offers the multiparameter of urine strips that
checks up to fourteen different parameters in urinalysis,
the
alignment we offer is compatible with urinalysis analyzers`,image:"RT.png",Catalogue:'https://drive.google.com/file/d/1gfNr_Aid8ymhHzTJShCazt77mUWMEt8b/view?usp=sharing'   },
        { tab: 'HEMATOLOGY REAGENTS KIT',key:'7',Text :`Innovation SD Provides Hematology reagents for many analysers
(Sysmix, Mindray and others)
featured by good quality and
competitive price.`,image:"Hem.png",Catalogue:'https://drive.google.com/file/d/1sXgxJ0nVTD9T_h4yiZy5agO4UWoJxrjE/view?usp=sharing'   },
        { tab: 'BLOOD GROUPING & PHENOTYPING REAGENTS',key:'7',Text :`Innovation SD offers blood grouping kits prepared and filled in very
neat Environment to eliminate any chance of contamination for this
reason we provide our kits as ready to use and dose not require any
further dilution and addition, while the reagent can be used in slide
and tube methods.`,image:"BG.png",Catalogue:'https://drive.google.com/file/d/10gGFrUypQ2iUySgdz6Qeic3nLW1uQw5b/view?usp=drive_link'   },
        { tab: 'TURBILATEX REAGENTS', key:'5',Text :`Innovation SD offers a dynamic range of Turbidimetric Latex Kits which are
conveniently packed in several
sizes and include
all the necessary
accessories.`,image:"TURBILATEXREAGENTS.png" ,Catalogue:'https://drive.google.com/file/d/1elFZG0f9romylK4F0kidkxnCroiPMw8x/view?usp=sharing'  },
        { tab: 'Urine Reagent Strips',key:'6',Text :`
        Innovation SD offers an extensive range of lateral flow
immunoassay tests for the rapid detection of antibodies and
antigens in human samples (blood, serum, plasma, urine, oral
swabs, nasal swabs, and feces). This range includes Fertility test,
Infectious disease test, sexually transmitted disease, Tumor
marker and others, can be supplied as cassette, strip and
midstream.
Also Innovation SD offers the multiparameter of urine strips that
checks up to fourteen different parameters in urinalysis, the
alignment we offer is compatible with urinalysis analyzers` ,
image:"US.png",Catalogue:'https://drive.google.com/file/d/14flZGUmc_t38NpwPh6qy_lpCDoIY6ser/view?usp=sharing'

},

   ],

    }
  }
}
</script>
<style scoped>
.hero9-bg {
  background-color: "transparent";
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  
}
</style>