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
        <div class="con"><el-icon class="m"><CreditCard /></el-icon>Averge Price: 684</div>
        <div class="con"><el-icon class="m"><MapLocation /></el-icon>Distance: 241.8km</div>
        <div class="con">酒店坐落于佛山市顺德区逢沙村欢乐大道3号欢乐海岸广场4栋。背靠佛山顺德华侨城欢乐海岸PLUS、玛雅海滩水公园，毗邻佛山顺德区政府、新能源汽车小镇、南方智谷、美的写字楼等商业区；近顺峰山公园，清晖园，宝林寺等著名景点。全新智能化配置，配备智能机器人送餐送物服务，酒店拥有210间客房，房间内配有普兰特床垫、裸睡级床品、高端的洗护套装，百兆高速无线网络。酒店以阅读为设计理念，在酒店大堂及竹居（商务区）摆设上千本不同种类的藏书，24小时可以体验静谧的读书环境。酒店公共区域设置了健身房(汗出）自助洗衣房（出尘），及会议室（共语）为来自五湖四海的宾客提供高品质、舒适、超值的住宿体验。酒店提倡人文，温暖的，有趣的“在路上”的第四空间生活方式，人生是一场旅行，总会有不期而遇的温暖。</div>
      </div>
    </el-drawer>
  </template>
  
  
  <script>
import { ref } from 'vue';
  export default{
    name: "Drawer3",
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