<template>
  <div class="container">
    <Nav></Nav>
    <FSDrawershoppingmall1 ref="Drawer3"></FSDrawershoppingmall1>
    <FSDrawershoppingmall2 ref="Drawer4"></FSDrawershoppingmall2>
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
        <div class="item" v-for="(item, index) in data" :key="index" @click="showdetail1(item.name)">
          <div class="imghotel"><img class="img2" :src="item.image" alt="" /></div>
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
            <el-button class="bt" @mouseover="h" @click.stop="showmap(item.name)">View in the Map</el-button>
          </div>
        </div>
        <WindowsMapShop1 ref="WindowsMapShop1" id="container1"></WindowsMapShop1>
      </div>
    </div>
  </div>
</template>

<script>
import hotelImg1 from "../assets/pic/data/佛山/Shoppingmall/万达广场/万达广场.webp";
import hotelImg2 from "../assets/pic/data/佛山/Shoppingmall/三水广场/封面.jpg";
import hotelImg3 from "../assets/pic/data/佛山/Shoppingmall/保利水城购物中心/1.jpg";
import hotelImg4 from "../assets/pic/data/佛山/Shoppingmall/岭南天地/3.jpg";
import PhoneImg from "../assets/pic/phone.png";
import InternetImg from "../assets/pic/internet.png";
import star from "../assets/pic/star.png";
import Nav from "./Nav.vue";
import FSDrawershoppingmall1 from "./FSDrawershoppingmall1.vue";
import FSDrawershoppingmall2 from "./FSDrawershoppingmall2.vue";

import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from 'vue'
import WindowsMapShop1 from "./WindowsMapShop1.vue";
const value = ref('')

export default {
  components: {
    Nav,
    FSDrawershoppingmall1,
    FSDrawershoppingmall2,
    WindowsMapShop1
},
  data() {
    return {
      value,
      options: [
        {
          value: "Best Rated",
          label: "Best Rated"
        },
        {
          value: "Shortest Distance",
          label: "Shortest Distance"
        },
        {
          value: "Best Price",
          label: "Best Price"
        }
      ],
      data: [
        {
          name: "保利水城购物中心",
          website: "wwww.gouwu.com",
          phone: "0757-82552606",
          image: hotelImg1,
          price:1,
          distance:1,
          star:5
        },
        {
          name: "岭南天地",
          website: "wwww.lingnan.com",
          phone: "0757-63818888",
          image: hotelImg2,
          star:5,
          price:2,
          distance:1
        },
        {
          name: "三水广场",
          website: "wwww.sanshui.com",
          phone: "0757-12832888",
          image: hotelImg3,
          star:5,
          price:2,
          distance:2
        },
        {
          name: "万达广场",
          website: "wwww.wanda.com",
          phone: "0757-91223311",
          image: hotelImg4,
          star:3,
          price:3,
          distance:3
        }],
      phoneImg: PhoneImg,
      internetImg: InternetImg,
      star: star
    };
  },
  methods: {
    showdetail1(name) {
      if(name == "保利水城购物中心"){
        this.$refs.Drawer3.drawer=true;
      }
      if(name == "岭南天地"){
        this.$refs.Drawer4.drawer=true;
      }
      // if(name == "佛山顺德欢乐海岸亚朵酒店"){
      //   this.$refs.Drawer3.drawer=true;
      // }
      // if(name == "佛山陈村希尔顿欢朋酒店"){
      //   this.$refs.Drawer4.drawer=true;
      // }
    },
    showmap(name){
      if(name == "岭南天地"){
        this.$refs.WindowsMapShop1.dialogVisible=true;
        AMapLoader.load({
          "key": "927f030785f9827cf4f5d6ba34591fbb",
          "securityJsCode":'87fd761862beba6b2c49194d67af351e',
          "version": "2.0",
          "plugins": ["AMap.Driving"]
        })
        .then((AMap)=>{
          var map = new AMap.Map("container1",{
              viewMode: '2D',
              resizeEnable: true,
              zoom: 11,
              center: [113.238843,22.950591],
          })
        })
      }

    },
    h(){
      this.hover=true;
    },
    sort(){
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
}
};
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

.imghotel{
  width:200px;
  height:100%;
}

.img2{
  height: 100%;
  width:100%;
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
  height: 200px;
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
