<template>
    <Slide></Slide>
</template>

<script>
import Slide from "../components/Slide"

export default {
  name: "home",
  components: {
    Slide
  },
  mounted() {
    // this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
  }
}
</script>
