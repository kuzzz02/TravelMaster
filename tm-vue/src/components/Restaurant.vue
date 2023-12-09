<template>
  <div class="container">
    <Nav></Nav>
    <div class="content">
      <div class="title">
        <div class="text">Restaurant in XXXXX</div>
      </div>
      <div class="search">
        <div class="text">Search various restaurants to help you find the best</div>
        <div class="select">
          Sorted By:

          <el-select placeholder="Best Price">
            <el-option
              v-for="item in selectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in data" :key="index">
          <img :src="item.image" alt="" />
          <div class="text">
            <div class="name">{{ `${index + 1}.${item.name} ` }}</div>
            <div class="website">
              <img :src="internetImg" alt="" width="25px" />
              <div>{{ item.website }}</div>
            </div>
            <div class="phone">
              <img :src="phoneImg" alt="" width="25px" />
              <div>{{ item.phone }}</div>
            </div>
            <div class="btn">View in the map</div>
          </div>
          <div class="star">
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotelImg from "../assets/pic/hotel_image.png";
import PhoneImg from "../assets/pic/phone.png";
import InternetImg from "../assets/pic/internet.png";
import star from "../assets/pic/star.png";
import Nav from "./Nav.vue";
export default {
  components: {
      Nav
    },
  data() {
    return {
      selectOptions: [
        {
          value: "price",
          label: "Best Price"
        }
      ],
      data: [
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "185121312",
          image: hotelImg
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "185121312",
          image: hotelImg
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "185121312",
          image: hotelImg
        },
        {
          name: "XXXXXXXX",
          website: "wwww.baidu.com",
          phone: "185121312",
          image: hotelImg
        }
      ],
      phoneImg: PhoneImg,
      internetImg: InternetImg,
      star: star
    };
  }
};
</script>

<style scoped>
.container {
  margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}

.content {
  margin-top: 40px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  margin-bottom: 40px;
}
.text {
  font-size: 38px;
  font-weight: 700;
  position: relative;
}
.title .text::after {
  position: absolute;
  content: "";
  width: 200px;
  height: 15px;
  background: rgb(88, 196, 182);
  right: 0;
  z-index: -1;
  bottom: 20px;
}
.search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.search .text {
  font-size: 30px;
  font-weight: 300;
  font-family: 'smiley sans';
}
.list {
  display: flex;
  position: relative;
  gap: 8px;
  flex-direction: column;
  width: 90%;
  margin: auto;
}
.item {
  display: flex;
  position: relative;
  flex-direction: row;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.item .text {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  font-size: 400;
}
.text .name {
  font-size: 24x;
  font-size: 600;
}
.btn {
  width: 240px;
  border: 2px solid black;
  font-size: 24px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  border-radius: 12px;
}
.website {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}
.phone {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}
.star {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  right: 20px;
  top: 20px;
}
</style>
