<template>
  <div class="container">
    <Drawer ref="draweRef"></Drawer>
    <Nav></Nav>
    <div class="content">
      <div class="title">
        <div class="text">Shoppingmall in XXXXX</div>
      </div>
      <div class="search">
        <div class="text">Search various shoppingmall to help you find the best</div>
        <div class="select">
          Sorted By:
          <el-select v-model="value" @change="sort()" placeholder="Best Rated">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in data" :key="index" @click="showdetail()">
          <img :src="item.image" alt="" />
          <div class="text">
            <div class="name">{{ `${index + 1}.${item.name} ` }}</div>
            <div class="website">
              <img :src="internetImg" alt="" width="25px" />
              <div class="star">
            <el-rate
              v-model="item.star"
              size = "large"
              disabled/>
          </div>
              <el-link :underline="false" style="font-size: 18px; color: black;"><el-icon><Connection /></el-icon>{{ item.website }}</el-link>
            </div>
            <div class="phone">
              <img :src="phoneImg" alt="" width="25px" />
              <div>{{ item.phone }}</div>
            </div>
            <el-button class="bt" @mouseover="h" @click.stop="showmap()">View in the Map</el-button>
          </div>
        </div>
        <WindowsMap ref="windowRef" id="container"></WindowsMap>
      </div>
    </div>
  </div>
</template>

<script setup>
import hotelImg from "../assets/pic/hotel_image.png";
import Nav from "./Nav.vue";
import WindowsMap from "./WindowsMap.vue";
import Drawer from "./Drawer.vue";
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from 'vue'
const value = ref('')

      const options= ref([
        {
          value: "Best Rated",
          label: "Best Rated"
        },
        {
          value: "Shortest Distance",
          label: "Shortest Distance"
        }
      ])
      const data= ref( [
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "111111111",
          image: hotelImg,
          price:1,
          distance:1,
          star:5
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "22222222",
          image: hotelImg,
          star:3,
          price:2,
          distance:1
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "33333333",
          image: hotelImg,
          star:5,
          price:2,
          distance:2
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "4444444",
          image: hotelImg,
          star:1,
          price:3,
          distance:3
        }])

    const draweRef =ref(null)
        const showdetail=()=>{
        draweRef.value.openDrawer()
    }

    const windowRef = ref(null)
    function showmap(){
      windowRef.value.openWindow()
      AMapLoader.load({
          "key": "927f030785f9827cf4f5d6ba34591fbb",
          "securityJsCode":'87fd761862beba6b2c49194d67af351e',
          "version": "2.0",
          "plugins": []
        })
        .then((AMap)=>{
          var map = new AMap.Map("container",{
              viewMode: '2D',
              resizeEnable: true,
              zoom: 11,
              center: [113.238843,22.950591],
          })
        })
    }

    function sort(){
      if (this.value == 'Best Rated'){
        this.data.sort((a,b)=>{
          return parseInt(b.star)-parseInt(a.star);
        })
      }
      if (this.value == 'Best Price'){
        this.data.sort((a,b)=>{
          return parseInt(a.prce)-parseInt(b.price);
        })
      }
      if (this.value == 'Shortest Distance'){
        this.data.sort((a,b)=>{
          return parseInt(a.distance)-parseInt(b.distance);
        })
      }
    }
</script>

<style scoped>
.container {
  margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.content {
  width: 1200px;
  margin: auto;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'smiley sans';
  margin-bottom: 40px;
  
}

.text {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  
}
.title .text::after {
  position: absolute;
  content: "";
  width: 300px;
  height: 15px;
  background: rgb(88, 196, 182);
  top: 25px;
  left: 30px;
  z-index: -1;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.search .text {
  font-size: 30px;
  font-weight: 700;
  font-family: "Smiley Sans";
}

.star {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  left: 650px;
  top: 15px;
}
.list {
  display: flex;
  position: relative;
  gap: 8px;
  flex-direction: column;
  width: 90%;
  margin: auto;
}
.item {
  display: flex;
  position: relative;
  flex-direction: row;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.item .text {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  font-size: 400;
}
.text .name {
  font-size: 24px;
  font-family: 'smiley sans';
  font-size: 600;
}
.bt {
  width: 210px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  font-family: 'smiley sans';
  color: black;
}
.bt:hover {
  background-color:#58c4b6 !important;
  color: white !important;
}
.website {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}
.phone {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}

.el-icon{
  font-size: 25px;
}
</style>
