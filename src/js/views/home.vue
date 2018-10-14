<template>
  <div>
    <PhonePanel></PhonePanel> 
    <Slide></Slide>
    
  </div>
   
</template>

<script>
import Slide from "../components/Slide"
import PhonePanel from "../components/PhonePanel"

export default {
  name: "home",
  components: {
    Slide,
    PhonePanel
  },
  mounted() {
    // this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
  }
}
</script>
