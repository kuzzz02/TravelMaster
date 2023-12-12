<template>
  <div class="container">
    <Nav></Nav>
    <div class="white-box">
      <div class="parent">
        <div class="title1">Find the best vehicle to xxx</div>
      <div class="block"></div>
      </div>
      <div class="button-row">
        <el-button class="bt" @mouseover="h"><el-icon class="left"><Location /></el-icon>From</el-button>
        <el-button class="bt" @mouseover="h"><el-icon class="left"><Position /></el-icon>To</el-button>
      </div>
      <div class="button-row2">
        <div class="bt2"><el-date-picker style="width:270px; height:80px; font-size: 25px;border-radius: 11px; " v-model="value1" type="date" size="larege" placeholder="Depart Date"
        :default-value="new Date(2023, 12, 12)"/></div>
        <div class="bt2"><el-date-picker style="width:270px; height:80px; font-size: 25px;border-radius: 11px; " v-model="value2" type="date" size="larege" placeholder="Return Date"
        :default-value="new Date(2023, 12, 12)"/></div>
      </div>
        <div class="button">
          <span class="button-text" @click.stop="showmap()">Create the Route</span>
      </div>
    </div>
    <WindowsMap ref="WindowsMap"></WindowsMap>>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import WindowsMap from "./WindowsMap.vue"
import { ref } from 'vue'
  const value1 = ref('')
  const value2 = ref('')
export default {
  name: "MyPage",
  data(){
    return{
      value1,
      value2
    }
  },
  components: {
    Nav,
    WindowsMap
  },
methods: {
  showmap(){
    this.$refs.WindowsMap.dialogVisible=true
  }
}
};
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

.bt2{
  font-family: "smiley sans";
  color: black;
  font-size: 30px;
  height: 80px;
  margin: auto;
  border-radius: 11px;
  background-color: #fff;
  display: flex;
  align-items: center;
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
  margin-top: 50px;
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

</style>