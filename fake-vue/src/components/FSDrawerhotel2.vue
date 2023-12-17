<template>
    <el-drawer v-model="drawer" title="" size="50%" direction="rtl" >
      <div class="body">
        <div class="title">111</div>
        <div class="image">
          <div class="area1"><img class="pic1" src="../assets/pic/data/重庆/Hotel/电子酒店/1.png" alt="" /></div>
          <div class="area2">
            <div class="area2-1"><img class="pic2" src="../assets/pic/data/重庆/Hotel/电子酒店/2.png" alt="" /></div>
            <div class="area2-2"><img class="pic2" src="../assets/pic/data/重庆/Hotel/电子酒店/3.png" alt="" /></div>
          </div>
        </div>
        <div class="con"><el-icon class="m"><CreditCard /></el-icon>Averge Price: 781</div>
        <div class="con"><el-icon class="m"><MapLocation /></el-icon>Distance: 121.29km</div>
        <div class="con">酒店，是由全球最大酒店管理公司——美国温德姆国际酒店集团管理的豪华商务型酒店。酒店的设计处处流露着花卉的独特理念，精雕细琢，与花卉灵魂互相交融，承载着陈村“千年花乡”的浓郁文化。酒店位于港澳及珠三角重要城市的交汇处。</div>
      </div>
    </el-drawer>
  </template>
  
  
  <script>
import { ref } from 'vue';
  export default{
    name: "Drawer4",
    data() {
        return {
            drawer: ref(false)
        };
    }
}
  </script>

<style scoped>
.body{
  width: 100%;
  height: 100%;
}
.image {
    margin-top: -50px;
    display: flex;
    flex-direction: row;
    height: 400px;
    gap: 4px;
  }
  
  .image .area1 {
    width: 65%;
    background-color: rgb(196, 196, 196);
  }
  
  .image .area2 {
    flex: 1;
    gap: 4px;
    display: flex;
    flex-direction: column;
  }
  
  .area2-1 {
    height: 50%;
    width: 100%;
    background-color: rgb(196, 196, 196);
  }
  
  .area2-2 {
    height: 50%;
    width: 100%;
    background-color: rgb(196, 196, 196);
  }
  .con{
    font-size: 26px;
    font-family: 'smiley sans';
  }
  .m{
    font-size: 30px;
    margin-top: 15px;
  }

  .pic1{
    width: 100%;
    height: 400px;
  }

  .pic2{
    width: 100%;
    height: 100%;
  }
</style>