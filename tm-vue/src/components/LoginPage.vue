<template>
    <div class="container">
        <div class="left-parent">
            <div class="header">Travel Master</div>
            <div class="parent">
                <div class="tital"> Welcome back to Travel Master👋</div>
                <div class="block"></div>
            </div>
            <div class="word">Our website gives you the best experience in everything in travelling</div>
            <div class="Email">Username</div>
            <div class="input_Email">
                <input type="text" v-model="user.username" placeholder="Your Username">
            </div>
            <div class="Pas">Password</div>
            <div class="input_Pas">
                <input type="password" v-model="user.password" @keydown.enter="Login()" placeholder="Your Password" >
            </div>   
            <div class="SU">
                <span class="black-text">Don't you have an account?</span>
                <span @click="goRegister()" class="green-text">Sign up</span>
            </div>
            <div class="bt">
                <div @click="Login()" class="white-text">Sign in</div>
            </div>
        </div>
        <img src="../assets/pic/OIP-C.jpg" alt="Description" class="Ima1">
        <router-view></router-view>      
    </div>
</template>

 
<script>
import UserService from '@/services/UserService';

export default {
    data(){
        return{
            user:{
                username:undefined,
                password:undefined
            }
        }
    },
    methods: {
        Login(){
            UserService.getUser({username:this.user.username})
            .then(response =>{
                const res = [response.data[0]]
                if(this.user.password == res[0].password){
                    setTimeout(() => {
                        this.$router.push({name:"Explore"})
                    },1000)
                }
            })
            .catch(error =>{
                alert("INVALID INPUT")
                console.log(error)
            })
        },
        goRegister(){
            this.$router.push({name:"Register"})
        }
    },
    mounted(){

    }
}
</script>


 
<style scoped>
.container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.left-parent{
    display: inline-block;
    vertical-align: top;
}
.header {
    width: 354px;
    height: 73px;
    margin-left: -30px;
    padding-left: 25px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    line-height: 73px; 
    letter-spacing: 0; 
    font-family: "Smiley Sans";
}
.parent {
    width: 600px;
    height: 199px;
    margin-left: 90px;
}
.tital {
    font-family: "SourceHanSansHC-VF.ttf";
    width: 582px;
    height: 199px;
    font-weight: 800; /* 字重为900 */
    font-size: 64px; /* 字号为64像素 */
    line-height: 93px; /* 行高为93像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: relative;
    z-index: 2;
}
.block {
    width: 312px;
    height: 37px;
    background-color: #58C4B6;
    transform: translate(144px,-55px);
    position: relative;
    z-index: 1;
}
.word {
    width: 450px;
    height: 58px;
    font-weight: 400; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 25px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    margin-left: 157px;
}
.Email {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    margin-left: 144px;
    margin-top: 1px;
}
.Pas {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    margin-left: 144px;
    margin-top: 37px;
}

.input_Email {
    width: 457px;
    height: 40px;
    margin-left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 10px;
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
    border-radius: 50px;
}
.input_Pas {
    width: 457px;
    height: 40px;
    margin-left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 10px;
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
    border-radius: 50px;
}

.SU {
    width: 382px;
    height: 29px;
    font-weight: 400; 
    font-size: 18px; 
    line-height: 2px; 
    letter-spacing: 0; 
    text-align: center;
    margin-left: 192px;
    margin-top: 48px;
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
    margin-left: 258px;
    margin-top: 30px;
    border-radius: 14px;
    padding: 5px 16px;
    background-color: #000000;
}
.Ima1 {
    width: 521px; 
    height: 690px;
    margin-left: 40px;
    border-radius: 10px;
}

@font-face {
    font-family: "Smiley Sans";
    src: url("../assets/font/SmileySans-Oblique.ttf");
}

@font-face {
    font-family: "SourceHanSansHC-VF.ttf";
    src: url("../assets/font/SourceHanSansHC-VF.ttf");
}
</style>
