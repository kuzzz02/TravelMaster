<template>
  <div id="app">
      <div class="title"></div>
      <Login/>
  </div>
</template>
 
<script>
import Login from './components/LoginPage.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>
 
<style>

/* .title{
    text-align: center;
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.btn {   
    background-color: rgb(210,193,326);
    border-radius:28px;
    border:1px solid #ffffff;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    padding:16px 31px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627; 
    margin: 10px 20px;  
}
.btn:hover {
    background-color:rgb(180,193,237);
}
.btn:active {
    position:relative;
    top:1px;
} */
</style>
