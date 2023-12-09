<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect">
    <div class="title">
      <div @click=goExplore class="black-text">Travel Master</div></div>
    <div class="flex-grow" />
    <el-sub-menu index="0">
      <template #title><div class="things">Things</div></template>
      <el-menu-item index="1" @click="goExplore('Hotels')">Hotel</el-menu-item>
      <el-menu-item index="2" @click="goExplore('Restaurant')">Restaurant</el-menu-item>
      <el-menu-item index="3" @click="goExplore('Shopping')">Shopping</el-menu-item>
      <el-menu-item index="4" @click="goExplore('ToDo')">ToDo</el-menu-item>
      <el-menu-item index="5" @click="goExplore('Vehicle')">Vehicle</el-menu-item>
    </el-sub-menu>  
  </el-menu>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    goExplore(path){
        this.$router.push({name: path})
    },
  },
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.title {
    height: 73px;
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

</style>