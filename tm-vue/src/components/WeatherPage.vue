<template>
    <div class="container">
      <Nav></Nav>
      <div class="image">
        <img src="../assets/pic/home-tab-rentalcars-hero-updated-1536x298.jpg" alt="">
      </div>
      <div class="overlay">
        <div class="button-row11">
          <el-button class="btq" @mouseover="h" @click="location"><el-icon class="left"><Location /></el-icon>Location</el-button>
          <div class="btq"><el-date-picker style="width:300px; height:80px; font-size: 25px;border-radius: 11px; " v-model="value1" type="date" size="larege" placeholder="Pick a date"
        :default-value="new Date(2023, 12, 12)"/></div>
        </div>
        <div class="plat"><el-button class="bt1" @click="search">Search The Weather</el-button></div>
      </div>
      <WindowsWea ref="WindowsWea"></WindowsWea>
      <WindowsWea ref="WindowsLoc"></WindowsWea>
    </div>
  </template>
  
  <script>
  import Nav from "./Nav.vue";
  import WindowsWea from "./WindowsWea.vue";
  import WindowsLoc from "./WindowsLoc.vue";
  import { ref } from 'vue'
import MapService from "@/services/MapService";
  const value1 = ref('')
  export default {
    name:"VehiclePage",
    data(){
      return{
        value1
      }
    },
    components: {
    Nav,
    WindowsWea,
    WindowsLoc
  },
    methods: {
      search(address,date){
      MapService.getWeather(address,date)
      .then(response =>{
        address = response.data
        console.log(username)
        MapService.getWeather(date)
        .then(response =>{
              if(date == response.data){
                  //show the weather
                }
              else{
                  alert("INVALID INPUT")
                  }
                })
        //show the weather;
        this.$refs.WindowsMap.dialogVisible=true;
      })
    },
      location(){
        this.$refs.WindowsLoc.dialogVisible=true
      }
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