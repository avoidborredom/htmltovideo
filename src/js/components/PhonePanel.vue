<template>
    <div class="phone-container">
    <el-row>
        <el-col :span="12" class="phone-item">
            <h2>Xiaomi Mi A2 Lite / Redmi 6 Pro</h2>
            <img :src="phone1">
            <div id="bubbles">
                <div class="bubble x1"></div>
                <div class="bubble x2"></div>
                <div class="bubble x3"></div>
                <div class="bubble x4"></div>
                <div class="bubble x5"></div>
            </div>
        </el-col>
        <el-col :span="12" class="phone-item">
            <h2>Umidigi One Pro </h2>
            <img :src="phone2">
            <div id="bubbles">
                <div class="bubble x2"></div>
                <div class="bubble x6"></div>
                <div class="bubble x1"></div>
                <div class="bubble x7"></div>
                <div class="bubble x8"></div>
            </div>
        </el-col>
    </el-row>
    </div>
</template>

<script>
import Data from "../utils/data";

export default {
  name: "PhonePanel",
  data() {
      return {
          phone1: require('../../assets/blue_phone.png'),
          phone2: require('../../assets/one_2.png')
      }
  },
  methods: {
  },
  mounted() {     
    this.$nextTick(() => {
      window.addEventListener('load', () => {
        this.windowHeight = window.innerHeight - 300
        this.cardHeight = this.windowHeight - 60
      });
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.phone-container{
    height:350px;
    padding-top:20px;
    overflow:hidden;


}

.phone-item{
    position:relative;
}

</style>
