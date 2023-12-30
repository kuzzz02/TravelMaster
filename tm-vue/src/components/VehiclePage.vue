<template>
  <div class="container">
    <Nav></Nav>
    <div class="white-box">
      <div class="parent">
        <div class="title1">Find the best vehicle to xxx</div>
      <div class="block"></div>
      </div>
      <div class="button-row">
        <el-button class="bt" @mouseover="h" @click="selectAddress('start')"><el-icon class="left"><Location /></el-icon>From</el-button>
        <el-button class="bt" @mouseover="h" @click="selectAddress('end')"><el-icon class="left"><Position /></el-icon>To</el-button>
      </div>
      <div class="button-row2">
        <div class="select" >
          Select Your Vehicle:
          <el-select v-model="value" placeholder="Public Transmission" style="width:300px" size="large">
            <el-option class="choose" @mouseover="h" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
        <div class="button">
          <span class="button-text" @click.stop="showmap()">Create the Route</span>
      </div>
    </div>
    <WindowsMap ref="windowsMap" id ="container"></WindowsMap>
    <WindowsLoc ref="windowsLoc" @confirm="confrimAddress"></WindowsLoc>>
  </div>
</template>

<script setup>
import Nav from "./Nav.vue";
import WindowsMap from "./WindowsMap.vue";
import WindowsLoc from "./WindowsLoc.vue";
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from 'vue'
window._AMapSecurityConfig = {securityJsCode:'87fd761862beba6b2c49194d67af351e'}

const value = ref('');
const options = ref([
  {
    value: "Public Transmission",
    label: "Public Transmission"
  },
  {
    value: "Driving",
    label: "Driving"
  },
  {
    value: "Walking",
    label: "Walking"
  }
]);
      
const windowsLoc = ref(null)
const windowsMap = ref(null)
const startAddr = ref("");
const targetAddr = ref("");
const addrType = ref("start");

function selectAddress(type) {
  addrType.value = type;
  windowsLoc.value.openWindows();
}

function confrimAddress(addr){
  if(addrType.value == 'start') startAddr.value = addr;
  if(addrType.value == 'end') targetAddr.value = addr;
}

function showmap(){
  windowsMap.value.openWindow()
  window._AMapSecurityConfig = {securityJsCode:'87fd761862beba6b2c49194d67af351e'}
  AMapLoader.load({
    "key": "927f030785f9827cf4f5d6ba34591fbb",
    "version": "2.0",
    "plugins": ['AMap.Driving'],
  })
  .then((AMap)=>{
      const map = new AMap.Map("container",{
          viewMode: '2D',
          resizeEnable: true,
          zoom: 11,
          center: [113.029126,23.149213]
      })
      // if(this.options[0].keys.value == "Driving"){
        var driving = new AMap.Driving({
              map: map,
              panel: "panel"
            }); 
            driving.search([
                {keyword: '华南师范大学',city:'佛山'},
                {keyword: '佛山西站',city:'佛山'}
            ], function(status, result) {
                if (status === 'complete') {
                    console.log('绘制驾车路线完成')
                } else {
                    console.log('获取驾车数据失败：' + result)
                }
            })
      // }
  })
  .catch(err => {
      console.log(err);
  })      
}
</script>

<style>
body{
  background-image: url("../assets/pic/dubai.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 70px;
}
.container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.white-box {
  width: 570px;
  height: 460px;
  margin-left: -20px;
  margin-top: 80px;
  border-radius: 18px;
  padding-top: 30px;
  background-color: #ffffff;
}
.parent {
    width: 100%;
    height: 199px;
    margin-left: 10px;
}
.title1{
  width: 398px;
  height: 50px;
  margin-bottom: 60px;
  margin-left: 90px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0; /* 字间距为0 */
  position: relative;
  z-index: 2;
  font-family: "smiley sans";
}
.block {
    width: 242px;
    height: 12px;
    background-color: #58C4B6;
    transform: translate(194px,-90px);
    position: relative;
    z-index: 1;
}
.button-row {
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-top: -110px;
  padding:  0 10px;
}

.button-row2 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 100px;
  padding:  0 20px;
}
.bt{
  font-family: "smiley sans";
  color: black;
  font-size: 30px;
  width: 300px;
  height: 80px;
  margin: auto;
  border-radius: 11px;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.select{
  font-size: 30px;
  font-family: 'smiley sans';
  margin-top: 20px;
  margin-left: 15px;

}

.bt:hover {
  background-color:#58c4b6 !important;
  color: white !important;
}
.left{ 
  font-size: 30px;
  margin-right: 25px;
  color: black;
}
.button {
  width: 207px;
  height: 50px;
  margin-left: 155px;
  margin-top: 25px;
  border-radius: 11px;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.button {
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(88, 196, 182);
  border-radius: 22px;
  border: none;
}

.button-text {
  font-family: "HarmonyOS Sans SC";
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  color: #fff;
}

.choose:hover {
  background-color:#7ddbcf !important;
  color: white !important;
}

</style>