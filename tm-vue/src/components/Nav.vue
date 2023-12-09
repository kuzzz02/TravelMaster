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
      <el-menu-item index="1">Hotel</el-menu-item>
      <el-menu-item index="2">Restaurant</el-menu-item>
      <el-menu-item index="3">Shopping</el-menu-item>
      <el-menu-item index="4">ToDo</el-menu-item>
      <el-menu-item index="5">Vehicle</el-menu-item>
    </el-sub-menu>  
  </el-menu>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    goExplore(){
        this.$router.push({name:"Explore"})
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