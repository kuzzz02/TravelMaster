<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect">
    <div class="title">
      <div @click="goExplore('Explore')" class="black-text">Travel Master</div></div>
    <div class="flex-grow" />
    <el-sub-menu index="0">
      <template #title><div class="things" @mouseover="h">Things</div></template>
      <el-menu-item class="Nav" @mouseover="h" index="1" @click="goExplore('Hotels')">Hotel</el-menu-item>
      <el-menu-item class="Nav" @mouseover="h" index="2" @click="goExplore('Restaurant')">Restaurant</el-menu-item>
      <el-menu-item class="Nav" @mouseover="h" index="3" @click="goExplore('Shopping')">Shopping</el-menu-item>
      <el-menu-item class="Nav" @mouseover="h" index="4" @click="goExplore('ToDo')">ToDo</el-menu-item>
      <el-menu-item class="Nav" @mouseover="h" index="5" @click="goExplore('Vehicle')">Vehicle</el-menu-item>
      <el-menu-item class="Nav" @mouseover="h" index="6" @click="goExplore('Weather')">Weather</el-menu-item>
    </el-sub-menu>  
  </el-menu>
</template>

<script setup>
import router from '@/router';
function goExplore(path){
    router.push({name: path})
    }
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu{
  position: sticky;
  top: 0;
  z-index: 999;;
}
.title {
    margin-left: -30px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    line-height: 73px; 
    letter-spacing: 0; 
    font-family: "Smiley Sans";
    height: 60px;
    }

    
.things{
  font-weight: 600; /* 字重为900 */
  font-size: 28px; 
  letter-spacing: 0; 
  font-family: "Smiley Sans";
  }

.things:hover{
  color:#7ddbcf !important;
}

.Nav:hover {
  background-color:#7ddbcf !important;
  color: white !important;
}

</style>