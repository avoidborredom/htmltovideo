<template>
  <div class="overall">
    <PhonePanel></PhonePanel>
    <el-row :gutter="20">
        <el-col :span="12">
            <el-card class="box-card" v-bind:style="{ height: windowHeight + 'px' }" >
            <div v-for="item in items" :key="item.id" class="text overall-item">                
                <el-row class="row" :gutter="20">
                    <el-col :span="6" class="overall-name">
                        {{ item.name }}
                    </el-col>
                    <el-col :span="14">
                        <div class="compare-item" v-html="item.phone1">                        
                        </div>
                    </el-col>

                    <el-col :span="4">
                        <el-button type="success"  circle v-if="item.winner === 1">
                            <i class="el-icon-check"></i>
                        </el-button>
                    </el-col>
                </el-row>
            </div>
            </el-card>

        </el-col>
        <el-col :span="12">
            <el-card class="box-card" v-bind:style="{height: windowHeight + 'px' }" >
            <div v-for="item in items" :key="item.id" class="text overall-item">                
                <el-row class="row" :gutter="20">
                    <el-col :span="6" class="overall-name">
                        {{ item.name }}
                    </el-col>
                    <el-col :span="14">
                        <div class="compare-item" v-html="item.phone2">                        
                        </div>
                    </el-col>

                    <el-col :span="4">
                        <el-button type="success"  circle v-if="item.winner === 2">
                            <i class="el-icon-check"></i>
                        </el-button>
                    </el-col>
                </el-row>
            </div>
            </el-card>
        </el-col>
    </el-row>
    
  </div>
   
</template>

<script>
import Data from "../utils/data";
import PhonePanel from "../components/PhonePanel"

export default {
  name: "Overall",
  data() {
      return {
          windowHeight: 0,
          items: Data,
          status:['','Tie!','Depends on your preference'],
      }
  },
  components: {
    PhonePanel
  },
  props: {
  },
  methods: {
  },
  mounted() {     
    this.$nextTick(() => {
      window.addEventListener('load', () => {
        this.windowHeight = window.innerHeight - 190
      });
    })
  },
};
</script>

<style lang="scss">
.phone-container{
    height: 150px !important;

    h2{
        font-size:20px;
        margin:0 0 10px;
    }
}
.compare-status{
    white-space:normal;
}
.overall{
    padding:0 20px;
    font-size: 16px;

    &-item{
        .row{
            padding: 10px 0;
            border-bottom:1px solid #eee;  
            text-align: left;  
        }
        
        &:last-child{
            .row{
                border:none;
            }
        }
    }

    &-name{
        font-weight:700;
    }
}
</style>

