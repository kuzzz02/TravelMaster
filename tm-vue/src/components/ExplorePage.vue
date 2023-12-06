<template>
    <div class="container">
        <div class="header">Travel Master</div>
        <div class="tital">Where to go?</div>
        <img src="../assets/pic/地图_地球_o.png" alt="Description" class="Ima2">
        <div class="word">Trip to explore right now</div>
        <div class="USD">USD</div>
        <div class="input_Se">
           <img class="PIma" src="../assets/pic/Search.png" alt="PIma">
           <input type="text" v-model="searchInput" placeholder="" @input="handleInputChange">
           <div class="dropdown" v-show="showDropdown">
             <ul>
               <li v-for="result in searchResults" :key="result">{{ result }}</li>
             </ul>
           </div>
        </div>
        <div class="bt" @click="search">Search</div>
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
 
<script>
export default {
  data() {
    return {
      searchInput: "",
      searchResults: [],
      showDropdown: false
    };
  },
  methods: {
    handleInputChange() {
      // 当输入框内容发生变化时，隐藏下拉框
      this.showDropdown = false;
    },
    search() {
      // 执行搜索操作（这里使用假数据）
      this.searchResults = ["Result 1", "Result 2", "Result 3"];

      // 显示下拉框
      this.showDropdown = true;
    },
    hideDropdown() {
      // 点击其他地方时隐藏下拉框
      this.showDropdown = false;
    }
  },
  mounted() {
    // 在页面加载时添加点击事件监听器
    document.addEventListener("click", this.hideDropdown);
  },
  beforeUnmount() {
    // 在组件销毁前移除点击事件监听器
    document.removeEventListener("click", this.hideDropdown);
  }
  
};
</script>


 
<style scoped>
 
html {
    height: 100%;
    background-color: #FFFFFF; 
    margin: 0;
    padding: 0;
}
body {
    height: 100%;
    background-color: #FFFFFF; 
    margin: 0;
    padding: 0;
}
.container {
    height: 800px;
    width: 1280px;
    background-color: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.header {
    width: 387px;
    height: 77px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    text-align: center;
    line-height: 70px; 
    letter-spacing: 0; 
    margin-top: 29px;
    margin-left: 42px;
    
}
.tital {
    width: 517px;
    height: 88px;
    font-weight: 900; /* 字重为900 */
    font-size: 64px; /* 字号为64像素 */
    line-height: 93px; /* 行高为93像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 118px;
    left: 363px;
    
}

.word {
    width: 306px;
    height: 46px;
    font-weight: 900; /* 字重为400 */
    font-size: 24px; /* 字号为18像素 */
    line-height: 35px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 379px;
    left: 77px;
   
}

.Ima2 {
    width: 50px; 
    height: 50px;
    position: absolute;
    top: 35px;
    left: 1053px;
}

.USD {
    width: 81px;
    height: 27px;
    font-weight: 700; 
    font-size: 20px; 
    line-height: 29px; 
    letter-spacing: 0; 
    text-align: center;
    position: absolute;
    top: 45px;
    left: 1083px;
}
.SU {
    width: 382px;
    height: 29px;
    font-weight: 400; 
    font-size: 18px; 
    line-height: 2px; 
    letter-spacing: 0; 
    text-align: center;
    position: absolute;
    top: 644px;
    left: 182px;    
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
    position: absolute;
    top: 243px;
    left: 194px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#FFFFFF;
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

.PIma {
    
    width: 60px; /* Ensure the image covers the entire input */
    height: 53px; /* Ensure the image covers the entire input */
    
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
    position: absolute;
    top: 250px;
    left: 959px;
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
    position: absolute;
    top: 433px;
    left: 107px;
    background-color: #C4C4C4;

}

.carousel-container {
  height: 248px; 
  width: 1057px;
  position: absolute;
  top: 433px;
  left: 107px;
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
