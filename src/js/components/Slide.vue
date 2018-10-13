<template>
  <el-carousel indicator-position="none" arrow="never" :height="windowHeight - 300 + 'px'" interval="10000">
    <!-- <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item> -->
    <el-carousel-item>
      <h3>test</h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3>test</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "Slide",
  data() {
      return {
          windowHeight: 0
      }
  },
  components: {
    
  },
  props: {
  },
  methods: {
      test(){
          alert(1);
      }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('load', () => {
        this.windowHeight = window.innerHeight
      });
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
