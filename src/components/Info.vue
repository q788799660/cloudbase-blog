<template>
  <div class="info-container">
    <img src="../assets/monkey.jpg" alt="" class="avatar">
    <div class="about">
      <h3 class="title">博主介绍</h3>
      <p class="content">
        博主介绍博主介绍博主介绍博主介绍博主介绍博主介绍
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info'
}
</script>

<style scoped>
.info-container {
  display: flex;
  align-items: center;
  height: 400px;
  flex-direction: column;
  background: #87dfd6;
  
}
.info-container:hover {
  background: #73c0b8;
  box-shadow: 1px 2px 2px #4e837e;
  transition: all .3s linear;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: spin 1s infinite linear;
  margin: 20px 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.about {
  width: 80%;
}
.title {
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.content {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  color: black;
}
</style>