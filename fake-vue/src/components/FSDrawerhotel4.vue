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
        <div class="con"><el-icon class="m"><CreditCard /></el-icon>Averge Price: 464</div>
        <div class="con"><el-icon class="m"><MapLocation /></el-icon>Distance: 112.3km</div>
        <div class="con">店设有各式温馨舒适客房，均设有独立工作区，并配备休闲沙发床等设施。每间客房全景落地窗，拥有充分的自然光采，城市天际线一览无余。虽身处城市，却又闹中取静，在这里尽享惬意舒适的放松之旅，现代设计风格与独特的岭南水乡风俗特色相结合，营造出一个优雅独特充满活力的空间，让您全方位享受到高品质的快乐居停体验。</div>
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