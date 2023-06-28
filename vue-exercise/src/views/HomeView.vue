<template>
  <NavbarComp/>
  <HomeComp/>
  <FooterComp/>
  <div class="home">


  </div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue'
import HomeComp from '@/components/HomeComp.vue'
import FooterComp from '@/components/FooterComp.vue'


export default {
  components: {
    NavbarComp,
    HomeComp,
    FooterComp
  }
}
</script>
