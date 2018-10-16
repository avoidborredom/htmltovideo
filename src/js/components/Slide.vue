<template>
  <el-carousel indicator-position="none" arrow="never" :height="windowHeight + 'px'" :interval="interval">
    <el-carousel-item v-for="item in items" :key="item.id">
      <div class="compare-container">
          <h3 class="compare-title">
              <el-button circle="true" size="large" :type="button[item.id % button.length]">{{ item.name }}</el-button>
              
          </h3>
          <el-row :gutter="20">
            <div class="compare-status" v-if="item.status">
                {{ status[item.status] }}
            </div>
            <el-col :span="12">
                <el-card class="box-card" v-bind:style="{ height: cardHeight + 'px'}">
                    <div class="compare-winner" v-if="item.winner === 1">
                        Winner!
                    </div>
                    <div class="compare-item" v-html="item.phone1">                        
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card" v-bind:style="{ height: cardHeight + 'px'}">
                    <div class="compare-winner" v-if="item.winner === 2">
                        Winner!
                    </div>
                    <div class="compare-item" v-html="item.phone2">                        
                    </div>
                </el-card>
            </el-col>
          </el-row>
          
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Data from "../utils/data";

export default {
  name: "Slide",
  data() {
      return {
          interval: 8000,
          windowHeight: 0,
          cardHeight: 0,
          status:['','Tie!','Depends on your preference'],
          button:['success','primary','warning','danger'],
          items: Data
      }
  },
  components: {
    
  },
  props: {
  },
  methods: {
  },
  mounted() {     
    this.$nextTick(() => {
      window.addEventListener('load', () => {
        this.windowHeight = window.innerHeight - 350
        this.cardHeight = this.windowHeight - 60
      });
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-carousel {
    overflow:visible;
}
.el-carousel__item {
    background:#ddd;
    overflow:visible;
}

.compare-container{
    
    padding:40px 20px 20px 20px;
    position:relative;
}

.compare-title{
    position: absolute;
    width: 100%;
    top:-20px;
    margin:0;
    z-index: 99;
    left:0;
    
    button{
        font-weight:700;
        font-size:26px;
    }
}

.compare-container{

    .el-card{
        display:flex;
        justify-content: center;
        align-items:center;
    }
}

.compare-item{
    font-size:23px;
}

.compare-status{
    position:absolute;
    left: 50%;
    top:50%;
    width: 150px;
    height: 100px;
    margin-top:-50px;
    margin-left:-75px;
    align-items:center;
    display:flex;
    justify-content: center;
    font-size: 19px;
    background:#37b6f6;
    color:#fff;
    font-weight:700;
    border-radius:5px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    z-index:2;
}

.box-card{
    position: relative;
    z-index:0;
    overflow:visible;
}

.compare-winner{
    position:absolute;
    top:0;
    padding:20px;
    background: #35d461;
    width:100px;
    color:#fff;
    left:50%;
    margin-left:-50px;
    font-size:19px;
    font-weight:700;
    border-radius:5px;
    margin-top:-33px;
}

</style>
