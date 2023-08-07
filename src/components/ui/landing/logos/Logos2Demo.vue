<template>
  <Logos2
    title="Partners"
    :logos="logos"
  />
</template>

<script>
import Logos2 from '@/components/ui/landing/logos/Logos2.vue'

export default {
  components: {
    Logos2
  },
  data() {
    return {
      logos: [{
        image: require('@/assets/images/logos/gmpLogo.png'),
        link: 'https://lic-hub.customs.gov.jo/JCAttachments/B98E3237E41411ED8613005056AAF794%5C469261FA-DC2A-4538-8C2D-F08E85E1C830.signed.PDF'
      }, {
        image: require('@/assets/images/logos/ISO1png.png'),
        link: '#'
      }]
    }
  }
}
</script>
