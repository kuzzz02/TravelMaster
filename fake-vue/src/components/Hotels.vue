<template>
  <div class="container">
    <FSDrawerhotel1 ref="Drawer1"></FSDrawerhotel1>
    <FSDrawerhotel2 ref="Drawer2"></FSDrawerhotel2>
    <FSDrawerhotel3 ref="Drawer3"></FSDrawerhotel3>
    <FSDrawerhotel4 ref="Drawer4"></FSDrawerhotel4>
    <div class="content">
      <Nav></Nav>
      <div class="title">
        <div class="text">FOSHAN Hotels and Places to Stay</div>
        <div class="calender">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Check in"
            end-placeholder="Check out"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="search">
        <div class="text">Search various hotels to help you find the best</div>
        <div class="select">
          Sorted By:
          <el-select v-model="value" @change="sort()" placeholder="Best Rated" >
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
            <el-button class="bt" @mouseover="h" @click.stop="showmap()">View in the Map</el-button>
          </div>
        </div>
   <WindowsMap ref="WindowsMap"></WindowsMap>>
      </div>
    </div>
  </div>
</template>

<script>
import hotelImg1 from "../assets/pic/data/佛山/Hotel/老八酒店/1.jpg";
import hotelImg2 from "../assets/pic/data/佛山/Hotel/亚朵酒店/2.jpg";
import hotelImg3 from "../assets/pic/data/佛山/Hotel/顺联酒店/3.webp";
import hotelImg4 from "../assets/pic/data/佛山/Hotel/老八酒店/3.jpg";
import PhoneImg from "../assets/pic/phone.png";
import InternetImg from "../assets/pic/internet.png";
import star from "../assets/pic/star.png";
import Nav from "./Nav.vue";
import FSDrawerhotel1 from "./FSDrawerhotel1.vue";
import FSDrawerhotel2 from "./FSDrawerhotel2.vue";
import FSDrawerhotel3 from "./FSDrawerhotel3.vue";
import FSDrawerhotel4 from "./FSDrawerhotel4.vue";
import WindowsMap from "./WindowsMap.vue";
import { ref } from 'vue'
const value1 = ref('')
const value = ''
export default {
  components: {
      FSDrawerhotel1,
      FSDrawerhotel2,
      FSDrawerhotel3,
      FSDrawerhotel4,
      Nav,
      WindowsMap
    },
  data() {
    return {
      value,
      value1,
      data: [
        {
          name: "佛山顺德顺联温德姆酒店",
          website: "",
          phone: "+86-757-29833333",
          image: hotelImg1,
          star:5,
          price:529,
          distance:30.4
        },
        {
          name: "佛山顺德喜来登酒店",
          website: "https://www.marriott.com.cn/hotels/fuosi-sheraton-shunde-hotel/overview/",
          phone: "+86-757-28888888",
          image: hotelImg2,
          star:5,
          price:781,
          distance:121.9
        },
        {
          name: "佛山顺德欢乐海岸亚朵酒店",
          website: "",
          phone: "+86-757-22218666",
          image: hotelImg3,
          star:4,
          price:684,
          distance:241.8
        },
        {
          name: "佛山陈村希尔顿欢朋酒店",
          website: "",
          phone: "+86-757-23328888",
          image: hotelImg4,
          star:4,
          price:464,
          distance:112.3
        }],
        options:[
        {
          value: 'Best Price',
          label: 'Best Price',
        },
        {
          value: 'Shortest Distance',
          label: 'Shortest Distance',
        },
        {
          value: 'Best Rated',
          label: 'Best Rated',
        }
      ],
      phoneImg: PhoneImg,
      internetImg: InternetImg,
      star: star
    };
  },
  methods: {
    showdetail() {
      this.$refs.Drawer1.drawer=true;
    //   if(name == "佛山顺德顺联温德姆酒店"){
    //     this.$refs.Drawer1.drawer=true;
    //   }
    //   if(name == "佛山顺德喜来登酒店"){
    //     this.$refs.Drawer2.drawer=true;
    //   }
    //   if(name == "佛山顺德欢乐海岸亚朵酒店"){
    //     this.$refs.Drawer3.drawer=true;
    //   }
    //   if(name == "佛山陈村希尔顿欢朋酒店"){
    //     this.$refs.Drawer4.drawer=true;
    //   }
    },
    showmap(){
      this.$refs.WindowsMap.dialogVisible=true;
      // MapService.getMap(address)
      // .then(response =>{
      //   //show the map;
      //   this.$refs.WindowsMap.dialogVisible=true;
      // })
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
  },
  mounted(){
    this.$refs.Drawer.drawer=false
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
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Smiley Sans";
  margin-bottom: 40px;
}
/* .imghotel{
  width:30px;
  height:30px;
} */
.img2{
  height:100;
  width:100%;
}
.text {
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
  position: relative;
}
.calender {
  margin-top: 40px;
}
.title .text::after {
  position: absolute;
  content: "";
  width: 200px;
  height: 15px;
  background: rgb(88, 196, 182);
  right: 0;
  top: 25px;
  z-index: -1;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.star {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: -20px;
  left: 730px;
}
.search .text {
  margin-top: -10px;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Smiley Sans';
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
  margin-top: -20px;
  font-family: 'smiley sans';
  font-size: 24px;
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
.star{
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  right: 20px;
  top: 20px;
}
.el-icon{
  font-size: 25px;
}
</style>
