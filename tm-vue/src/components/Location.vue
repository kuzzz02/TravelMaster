<template>
  <div class="container">
    <div class="content">
      <Nav></Nav>
      <div class="title"><span>Explore </span>XXX</div> <!--{{this.location.LocationName}}-->
      <div class="list">
        <div v-for="(item, index) in locationList" :key="index" class="item" @click="Explore(item.name)">
          <span class="text">{{ item.name }}</span>
          <img :src="item.icon" alt="" class="icon" />
        </div>
      </div>
      <div class="image">
        <div class="area1"></div>
        <div class="area2">
          <div class="area2-1"></div>
          <div class="area2-2"></div>
        </div>
      </div>
      <div class="footer">
        <div>About xxx</div>
        <div>XXXXX</div>
      </div>
    </div>
    <ExplorePage :location="location" @success="getmsg" ></ExplorePage>
  </div>
</template>
  
<!-- <script >
import todo from "../assets/pic/todo.png";
import shopping from "../assets/pic/shopping.png";
import restaurant from "../assets/pic/restaurant.png";
import hotel from "../assets/pic/Hotel.png";
import vehicles from "../assets/pic/vehicles.png";
import Nav from "./Nav.vue";
import weather from "../assets/pic/weather.png";
import ExplorePage from "./ExplorePage.vue";

export default {
  components: { Nav, ExplorePage },
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
      ],
      location: undefined
    };
  },
  methods: {
    Explore(name) {
      this.$router.push({ name: name });
    },
    getmsg(data) {
      this.location = data;
      console.log(this.location)
    }
  },
  mounted() {
    
  },

};

</script> -->

<script setup>
import todo from "../assets/pic/todo.png";
import shopping from "../assets/pic/shopping.png";
import restaurant from "../assets/pic/restaurant.png";
import hotel from "../assets/pic/Hotel.png";
import vehicles from "../assets/pic/vehicles.png";
import Nav from "./Nav.vue";
import weather from "../assets/pic/weather.png";

import ExplorePage from "./ExplorePage.vue";
import router from "@/router";
import { ref } from 'vue';
import { onMounted } from 'vue';

const locationList = ref([
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
]);

function Explore(name){
    router.push({ name: name });
}

function getmsg(data) {
    const location = data;
    console.log(location + "123123")
}

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
  background-color: #7ddbcf;
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
</style>
  
