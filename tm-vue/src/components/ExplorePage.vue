<template>
  <div class="container">
    <div class="header">Travel Master</div>
    <div class="tital">Where to go?</div>
    <div class="input_Se">
      <el-icon class="search">
        <Search />
      </el-icon>
      <input type="text" v-model="LocationName" placeholder="" @keydown.enter="goLocation(LocationName)">
      <div class="dropdown" v-show="showDropdown">
        <ul>
          <li v-for="result in searchResults" :key="result">{{ result }}</li>
        </ul>
      </div>
      <div @click="goLocation(LocationName)" class="bt">Search</div>
    </div>
    <div class="word">Trip to explore right now</div>
    <div class="carousel-container">
      <el-carousel height="248px" indicator-position="outside">
        <el-carousel-item v-for="item in 2" :key="item">
          <div class="image-container" v-if="item % 2 !== 0">
            <img src="../assets/pic/b70f06b21f95d5548b1313da56194914.jpg" alt="Image 1">
            <img src="../assets/pic/b70f06b21f95d5548b1313da56194914.jpg" alt="Image 2">
            <img src="../assets/pic/b70f06b21f95d5548b1313da56194914.jpg" alt="Image 3">
            <img src="../assets/pic/b70f06b21f95d5548b1313da56194914.jpg" alt="Image 4">
          </div>
          <div class="image-container" v-if="item % 2 === 0">
            <img src="../assets/pic/dubai.jpg" alt="Image 5">
            <img src="../assets/pic/dubai.jpg" alt="Image 6">
            <img src="../assets/pic/dubai.jpg" alt="Image 7">
            <img src="../assets/pic/dubai.jpg" alt="Image 8">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
 
<!-- <script>
import TravelService from '@/services/TravelService';

export default {
  props:['location'],
  data() {
    return {
      LocationName: undefined
    };
  },
  mounted(){
    this.$emit('success', 123)
  },
  methods: {
    goLocation(LocationName) {
      TravelService.getLocation({ LocationName: LocationName })
        .then(response => {
          const res = [response.data[0]]
          var location = res[0] //.LocationName
          // emits('success', location)
          this.$emit('success', location)
          this.$router.push({ name: "Location" })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script> -->

<script setup>
import TravelService from '@/services/TravelService';

</script>

<style scoped> .container {
   margin: 0 auto;
   padding: 0;
   height: 750px;
   width: 1280px;
   background-image: url("../assets/pic/background.png");
 }

 .header {
   width: 354px;
   height: 27px;
   margin-left: -30px;
   padding-left: 25px;
   font-weight: 900;
   /* 字重为900 */
   font-size: 48px;
   line-height: 73px;
   letter-spacing: 0;
   font-family: "Smiley Sans";
 }

 .tital {
   width: 517px;
   height: 88px;
   font-weight: 900;
   /* 字重为900 */
   font-size: 72px;
   /* 字号为64像素 */
   line-height: 93px;
   /* 行高为93像素 */
   letter-spacing: 0;
   /* 字间距为0 */
   text-align: center;
   /* 居中对齐 */
   position: relative;
   z-index: 2;
   top: 52px;
   left: 355px;
   font-family: "smiley sans";
 }

 .word {
   width: 306px;
   height: 46px;
   font-weight: 900;
   /* 字重为400 */
   font-size: 28px;
   /* 字号为18像素 */
   line-height: 35px;
   /* 行高为25像素 */
   letter-spacing: 0;
   /* 字间距为0 */
   text-align: center;
   /* 居中对齐 */
   font-family: 'smiley sans';
   margin-top: 70px;
   margin-left: 70px;
 }

 .black-text {
   color: #313957;
 }

 .green-text {
   color: #58C4B6;
 }

 .input_Se {
   width: 892px;
   height: 71px;
   margin-top: 118px;
   margin-left: 180px;
   padding: 9px 12px;
   box-sizing: border-box;
   display: flex;
   align-items: center;
   background-color: #FFFFFF;
   border-radius: 24px 24px 24px 24px;
   box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
 }

 .input_Se input {
   width: 680px;
   height: 100%;
   border: none;
   outline: none;
   background: transparent;
   font-weight: 400;
   font-size: 40px;
   line-height: 22px;
   letter-spacing: 0;
   color: #000000;
   text-align: left;
   border-radius: 24px 24px 24px 24px;
 }

 .search {
   font-size: 35px;
 }

 .bt {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 115px;
   height: 57px;
   font-weight: 900;
   font-size: 24px;
   line-height: 35px;
   letter-spacing: 0;
   text-align: center;
   margin-left: 100px;
   border-radius: 24px;
   background-color: #58C4B6;
 }

 .black-text {
   color: #000000;
 }

 .input_Se ul {
   list-style: none;
   padding: 0;
   margin: 0;
 }

 .input_Se li {
   padding: 10px;
   cursor: pointer;
 }

 .bg {
   width: 256px;
   height: 248px;
   background-color: #C4C4C4;

 }

 .carousel-container {
   height: 348px;
   width: 1057px;
   margin-left: 110px;
 }

 .image-container {
   display: flex;
 }

 .image-container img {
   width: 256px;
   height: 248px;
   margin-right: 11px;
   border-radius: 8px 8px 8px 8px;
 }
</style>
