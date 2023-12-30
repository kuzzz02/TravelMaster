<template>
    <div class="container">
      <Nav></Nav>
      <div class="image">
        <img src="../assets/pic/home-tab-rentalcars-hero-updated-1536x298.jpg" alt="">
      </div>
      <div class="overlay">
        <div class="button-row11">
          <el-button class="btq" @mouseover="h" @click="selectAddress('location')"><el-icon class="left"><Location /></el-icon>Location</el-button>
          <div class="btq"><el-date-picker style="width:300px; height:80px; font-size: 25px;border-radius: 11px; " v-model="value1" type="date" size="larege" placeholder="Pick a date"
        :default-value="new Date(2023, 12, 12)"/></div>
        </div>
        <div class="plat"><el-button class="bt1" @click="search()">Search The Weather</el-button></div>
      </div>
      <WindowsWea ref="windowsWea" id="container"></WindowsWea>
      <WindowsLoc ref="windowsLoc" @confirm="confrimAddress"></WindowsLoc>
    </div>
  </template>
  
  <script setup>
  import Nav from "./Nav.vue";
  import WindowsWea from "./WindowsWea.vue";
  import WindowsLoc from "./WindowsLoc.vue";
  import AMapLoader from '@amap/amap-jsapi-loader';
  import { ref } from 'vue'
  window._AMapSecurityConfig = {securityJsCode:'87fd761862beba6b2c49194d67af351e'}


const value1 = ref('')
const windowsWea = ref(null)
const windowsLoc = ref(null)
const targetAddr = ref("");
const addrType = ref("location");

function selectAddress(type) {
  addrType.value = type;
  windowsLoc.value.openWindows();
}

function confrimAddress(addr){
  if(addrType.value == 'location') targetAddr.value = addr;
}

function search(){
  windowsWea.value.openWindows()
  window._AMapSecurityConfig = {securityJsCode:'87fd761862beba6b2c49194d67af351e'}
  AMapLoader.load({
    "key": "927f030785f9827cf4f5d6ba34591fbb",
    "version": "2.0",
    "plugins": ["AMap.Weather"]
  })
  .then((AMap)=>{
      const map = new AMap.Map("container",{
          viewMode: '2D',
          resizeEnable: true,
          zoom: 11,
          center: [113.029126,23.149213],
      })
      var weather = new AMap.Weather();
      // weather.getForecast('佛山市', function(err, data) {
      //   console.log(err, data);
      // })
      weather.getLive('南海区', function(err, data) {
        if (!err) {
            var str = [];
            str.push('<h4 >实时天气' + '</h4><hr>');
            str.push('<p>城市/区：' + data.city + '</p>');
            str.push('<p>天气：' + data.weather + '</p>');
            str.push('<p>温度：' + data.temperature + '℃</p>');
            str.push('<p>风向：' + data.windDirection + '</p>');
            str.push('<p>风力：' + data.windPower + ' 级</p>');
            str.push('<p>空气湿度：' + data.humidity + '</p>');
            str.push('<p>发布时间：' + data.reportTime + '</p>');
            var marker = new AMap.Marker({map: map, position: map.getCenter()});
            var infoWin = new AMap.InfoWindow({
                content: '<div class="info" style="position:inherit;margin-bottom:0;background:white;padding:10px">'+str.join('')+'</div><div class="sharp"></div>',
                isCustom:true,
                offset: new AMap.Pixel(0, -37)
            });
            infoWin.open(map, marker.getPosition());
            marker.on('mouseover', function() {
                infoWin.open(map, marker.getPosition());
            });
          }
        })
  })
  .catch(err => {
      console.log(err);
  })
}

  </script>
  
  <style scoped> 
  .container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
  
  .image{
    width: 1412px;
    margin-left: -70px;
  }

  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  
  .overlay {
    height: 280px;
    position: relative;
    margin-top: -110px;
    background-color: #F2F2F2;
    padding-top: 30px;
  }
  
  .button-row11{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 100px;
    padding:  0 20px;
    margin-left: auto;
  }
  .btq{
  font-family: "smiley sans";
  color: black;
  font-size: 30px;
  width: 300px;
  height: 80px;
  margin: auto;
  border-radius: 11px;
  display: flex;
  align-items: center;
}
.btq:hover {
  background-color:#58c4b6 !important;
  color: white !important;
}

.plat{
    display: flex;
    justify-content: space-between;
    margin-top: -10px;
    height: 100px;
    padding:  0 20px;
    margin-left: auto;
}
.bt1{
  width: 300px;
  height: 80px;
  border-radius: 11px;
  font-size: 26px;
  font-weight: 600;
  background-color: #58C4B6;
  color: white;
  margin:auto;
  margin-top: 40px;
  }

  .el-date-picker {
    border-radius: 11px;
}
  </style>