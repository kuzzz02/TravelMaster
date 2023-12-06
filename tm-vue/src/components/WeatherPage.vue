<template>
  <div class="container">
    <div class="header">Travel Master</div>
    <div class="image">
      <img src="../assets/pic/home-tab-rentalcars-hero-updated-1536x298.jpg" alt="Image" class="LongPic"
           @click=goVehicle>
    </div>
    <div class="overlay"></div>
    <div class="left-box">
      <div class="icon">
        <img src="../assets/pic/酒店calendar.png" alt="Image" class="Hotel">
      </div>
      <div class="text">
        Date
      </div>
    </div>
    <div class="right-box">
      <div class="icon">
        <img src="../assets/pic/location.png" alt="Image" class="Location">
      </div>
      <div class="text">
        Location
      </div>
    </div>
    <div class="bottom-area">
      <div class="button">
        <span class="button-text">Search the Weather</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"VehiclePage",
  methods: {
    goVehicle(){
      this.$router.push({name:"Vehicle"})
    }
  }
}
</script>

<style>
.container {
  width: 1280px;
  height: 437px;
  position: relative;
  background-color: rgb(88, 196, 182);
  border-radius: 0;
  overflow: hidden;
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

.image {
  width: 100%;
  height: 248.33px;
  position: absolute;
  top: 115px;
  left: 0;
  border-radius: 0;
  object-fit: cover;
  /* 设置图片的样式 */
}

.overlay {
  width: 1100px;
  height: 269px;
  position: absolute;
  top: 276px;
  left: 90px;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.8);
  /* 设置白框的样式 */
}


.left-box {
  width: 264px;
  height: 70px;
  position: absolute;
  top: 317px;
  left: 335px;
  border-radius: 11px;
  border: 2px solid #000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 设置左侧白色区域的样式 */
}

.right-box {
  width: 264px;
  height: 70px;
  position: absolute;
  top: 317px;
  right: 319px;
  border-radius: 11px;
  border: 2px solid #000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 设置右侧带边框的白色区域的样式 */
}

.Hotel,
.Location
{
  width: 40px; /* 设置图标的宽度 */
  height: 40px; /* 设置图标的高度 */
}

.text {
  font-family: "思源黑体";
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0;
  text-align: center;
}

.bottom-area {
  width: 207px;
  height: 50px;
  position: absolute;
  top: 458px;
  left: 537px;
  border-radius: 22px;
  /* 设置下方区域的样式 */
}

.button {
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(88, 196, 182);
  border-radius: 40px;
  /* 按钮的样式 */
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
