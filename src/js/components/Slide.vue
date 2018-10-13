<template>
  <el-carousel indicator-position="none" arrow="never" :height="windowHeight + 'px'" interval=10000>
    <el-carousel-item v-for="item in items" :key="item.id">
      <div class="compare-container">
          <h3 class="compare-title">
              {{ item.name }}
          </h3>
          
          <div class="compare-items">             
            <div class="compare-item">
                {{ item.phone1 }}
            </div>
            <div class="compare-item">
                {{ item.phone2 }}
            </div>    
          </div>
          
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "Slide",
  data() {
      return {
          windowHeight: 0,
          items: [
          {
              id: 1,
              name: "camera",
              phone1: "16mp",
              phone2: "24mp",
              status: 0,
              winner: 2
          },
          {
              id: 2,
              name: "display",
              phone1: "oled",
              phone2: "lcd",
              status: 0,
              winner: 1
          },
          {
              id: 3,
              name: "network",
              phone1: "4g",
              phone2: "4g",
              status: 1,
              winner: 0
          },
          {
              id: 4,
              name: "cord",
              phone1: "type c",
              phone2: "micro usb",
              status: 2,
              winner: 0
          }
          ]
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
      console.log(this.items);
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
