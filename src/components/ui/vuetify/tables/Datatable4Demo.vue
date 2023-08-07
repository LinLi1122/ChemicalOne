<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
   props:{
    openings:Array
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'CODE',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'DESCRIPTION', value: 'DESCRIPTION' },
        { text: 'UNIT', value: 'UNIT' },
         { text: 'Insert', value: 'Insert' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          DESCRIPTION: 159,
          UNIT: 6.0,
          Insert:""
        
         
        },
        {
          name: 'Ice cream sandwich',
          DESCRIPTION: 237,
         UNIT: 9.0,
        
          
        },
        {
          name: 'Eclair',
           DESCRIPTION: 237,
         UNIT: 9.0,
        
        },
        {
          name: 'Cupcake',
            DESCRIPTION: 237,
         UNIT: 9.0,
         
        },
        {
          name: 'Gingerbread',
           DESCRIPTION: 237,
         UNIT: 9.0,
          
        },
        {
          name: 'Jelly bean',
           DESCRIPTION: 237,
         UNIT: 9.0,
         
        },
        {
          name: 'Lollipop',
           DESCRIPTION: 237,
         UNIT: 9.0,
        
        },
        {
          name: 'Honeycomb',
           DESCRIPTION: 237,
         UNIT: 9.0,
        
        },
        {
          name: 'Donut',
          DESCRIPTION: 237,
         UNIT: 9.0,
        
        },
        {
          name: 'KitKat',
           DESCRIPTION: 237,
           UNIT: 9.0,
       
        }
      ]
    }
  }
}
</script>
