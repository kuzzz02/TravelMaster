<template>
    <el-drawer v-model="drawer" title="" size="50%" direction="rtl" >
      <div class="body">
        <div class="title">111</div>
        <div class="image">
          <div class="area1"><img class="pic1" src="../assets/pic/data/重庆/Hotel/传统酒店/1.png" alt="" /></div>
          <div class="area2">
            <div class="area2-1"><img class="pic2" src="../assets/pic/data/重庆/Hotel/传统酒店/2.png" alt="" /></div>
            <div class="area2-2"><img class="pic2" src="../assets/pic/data/重庆/Hotel/传统酒店/3.png" alt="" /></div>
          </div>
        </div>
        <div class="con"><el-icon class="m"><CreditCard /></el-icon>Averge Price: 110</div>
        <div class="con"><el-icon class="m"><MapLocation /></el-icon>Distance: 30km</div>
        <div class="con">酒店设有总统套房、行政豪华套房、豪华标准间、商务标准间等不同风格、档次的房间188套。客房内设施高档，装修时尚、新潮，格调温馨怡人。所有房间均配备液晶数字电视，百兆LAN网络专线和顶级卫浴设备。人性化的空间规划与设计，温馨舒适，带给您家的感觉。酒店同时设有中、小型会议室，可根据会议类型的需求提供各式会议的接待。</div>
      </div>
    </el-drawer>
  </template>
  
  
  <script>
import { ref } from 'vue';
  export default{
    name: "Drawer1",
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