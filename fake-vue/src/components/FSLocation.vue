<template>
    <div class="container">
      <div class="content">
        <Nav></Nav>
        <div class="title"><span>Explore </span>FOSHAN! </div>
        <div class="list">
          <div
            v-for="(item, index) in locationList"
            :key="index"
            class="item"
            @click="Explore(item.name)">
            <span class="text">{{ item.name }}</span>
            <img :src="item.icon" alt="" class="icon" />
          </div>
        </div>
        <div class="image">
          <div class="area1"><img class="img1" src="../assets/pic/data/佛山/Location/1.jpeg"></div>
          <div class="area2">
            <div class="area2-1"><img class="img2" src="../assets/pic/data/佛山/Location/2.jpg"></div>
            <div class="area2-1"><img class="img3" src="../assets/pic/data/佛山/Location/3.webp"></div>
          </div>
        </div>
        <div class="footer">
          <div class="i">About FOSHAN</div>
          <div class="i">佛山市是广府文化的核心区域，有粤剧、陶瓷、剪纸、秋色等传统文化，佛山是国家历史文化名城 [2-3]，历史上是中国天下四聚、四大名镇之一，有陶艺之乡、武术之乡、粤剧之乡之称，是中国龙舟龙狮文化名城，粤剧发源地，广府文化发源地、兴盛地、传承地</div>
        </div>
      </div>

    </div>
    
  </template>
  
  <script>
  import todo from "../assets/pic/todo.png";
  import shopping from "../assets/pic/shopping.png";
  import restaurant from "../assets/pic/restaurant.png";
  import hotel from "../assets/pic/Hotel.png";
  import vehicles from "../assets/pic/vehicles.png";
  import Nav from "./Nav.vue";
  import weather from "../assets/pic/weather.png";
  
  export default {
    components: {Nav},
    props:["location"],
    data() {
      return {
        locationList: [
          {
            name: "Hotels",
            icon: hotel,
          },
          {
            name: "Restaurant",
            icon: restaurant,
          },
          {
            name: "Shopping",
            icon: shopping,
          },
          {
            name: "ToDo",
            icon: todo,
          },
          {
            name: "Vehicle",
            icon: vehicles,
          },
          {
            name: "Weather",
            icon: weather,
          }
        ]
      };
    },
    methods: {
      Explore(name) {
        this.$router.push({ name: name });
        
      },
    },
    mounted(){
      // console.log(this.location)

    }
  };
  </script>
  
  <style  scoped>
  .container {
    margin: 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
  }
  
  .footer {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
  }
  .content {
    padding: 0 20px;
  }
  .title {
    font-size: 64px;
    font-weight: 700;
    margin-top: 10px;
    font-family: "smiley sans";
  }
  .i {
    font-size: 20px;
    font-weight: 700;
    font-family: "smiley sans";
  }
  .content .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    gap: 20px;
    width: 1050px;
    margin-top: 20px;
  }
  
  .content .list .item {
    display: flex;
    padding: 14px 23px;
    font-size: 32px;
    font-family: "smiley sans";
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    width: 180px;
    margin-left: 20px;
  }
  .list :hover {
    background-color:#7ddbcf;
    border: 0;
    color: white;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
  
  .item .text {
    font-size: 24px;
  }
  
  .title span {
    color: rgb(88, 196, 182);
  }
  
  .image {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 452px;
    gap: 4px;
  }
  
  .image .area1 {
    width: 55%;
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
  .img1{
    width: 100%;
    height: 100%;
  }
  .img2{
    width: 100%;
    height: 100%;
  }
  .img3{
    width: 100%;
    height: 100%;
  }
  </style>
  
