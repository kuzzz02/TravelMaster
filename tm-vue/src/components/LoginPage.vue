<template>
    <div class="container">
        <img src="../assets/pic/OIP-C.jpg" alt="Description" class="Ima1">
        <img src="../assets/pic/地图_地球_o.png" alt="Description" class="Ima2">
        <div class="header">Travel Master</div>
        <div class="tital">Welcome back to Travel Master👋</div>
        <div class="word">Our website gives you the best experience in everything in travelling</div>
        <div class="Email">Email</div>
        <div class="block"></div>
        <div class="Pas">Password</div>
        <div class="USD">USD</div>
        <div class="bt">
            <div @click=goExplore class="white-text">Sign in</div>
        </div>   
        <div class="SU">
            <span class="black-text">Don't you have an account?</span>
            <span @click=goRegister class="green-text">Sign up</span>
        </div>
        <div class="input_Email">
            <input type="text" placeholder="example@email.com">
        </div>
        <div class="input_Pas">
            <input type="password" placeholder="Your Password" @input="handlePasswordInput">
        </div>
        <router-view></router-view>         
    </div>
</template>
 
<script>
export default {
  name:"LoginPage",
  methods: {
    handlePasswordInput(event) {
      const inputValue = event.target.value;
      const hiddenValue = "*".repeat(inputValue.length);
      event.target.value = hiddenValue;
    },
    goRegister(){
        this.$router.push({name:"Register"})
    },
    goExplore(){
        this.$router.push({name:"Explore"})
    }
  }
}
</script>


 
<style scoped>
 *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  
.container {
    height: 800px;
    width: 1300px;
    margin: auto;
    background-color: #139263;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.header {
    width: 354px;
    height: 73px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    text-align: center;
    line-height: 73px; 
    letter-spacing: 0; 
    margin-top: 22px;
    margin-left: 8px;
    
}
.tital {
    width: 582px;
    height: 199px;
    font-weight: 900; /* 字重为900 */
    font-size: 64px; /* 字号为64像素 */
    line-height: 93px; /* 行高为93像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    margin-top: 28px; /* 距容器顶部的距离 */
    margin-left: 101px; /* 距容器左侧的距离 */
}
.word {
    width: 450px;
    height: 58px;
    font-weight: 400; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 25px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 350.5px;
    left: 157px;
    
}
.Email {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    position: absolute;
    top: 445.5px;
    left: 132px;
   
}
.Pas {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    position: absolute;
    top: 542.5px;
    left: 147px;
    
}
.block {
    width: 312px;
    height: 37px;
    position: absolute;
    top: 270.5px;
    left: 263px;
    background-color: #58C4B6;
    z-index: -1;
}
.input_Email {
    width: 457px;
    height: 40px;
    position: absolute;
    top: 479.5px;
    left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 50px 50px 50px 50px;
}
.input_Email input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    color: #A8ABB2;
    text-align: left;
    border-radius: 50px 50px 50px 50px;
}
.input_Pas {
    width: 457px;
    height: 40px;
    position: absolute;
    top: 576.5px;
    left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 50px 50px 50px 50px;
}
.input_Pas input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    color: #A8ABB2;
    text-align: left;
    border-radius: 50px 50px 50px 50px;
}
.Ima1 {
    width: 521px; 
    height: 676px;
    position: absolute;
    top: 98px;
    left: 703px;
    border-radius: 10px 10px 10px 10px;
}
.Ima2 {
    width: 50px; 
    height: 50px;
    position: absolute;
    top: 35px;
    left: 1024px;
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
    left: 1054px;
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

.white-text {
  color: #FFFFFF;
}

.bt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 48px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 22px; 
    letter-spacing: 0; 
    text-align: center;
    position: absolute;
    top: 693px;
    left: 258px;
    border-radius: 14px;
    padding: 5px 16px;
    background-color: #000000;
}

</style>
