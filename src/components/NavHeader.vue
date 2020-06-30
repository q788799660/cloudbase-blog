<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/tag" exact>标签</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navHeader',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  text-align: left;
  padding-left: 60px;
}
li{
  display: inline-block;
  margin-left: 50px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
a:hover {
  background: rgba(255,255,255,0.8);
	color: #444;
  transition: all .3s ease-in-out;
}
nav {
	background: #086972;
	padding: 15px 0;
	margin-bottom: 40px;
}
.router-link-active {
	background: rgba(255,255,255,0.8);
	color: #444;
}
</style>
