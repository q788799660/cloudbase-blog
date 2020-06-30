<template>
  <div class="container">
    <header></header>
    <div class="left">
        <ul>
          <li v-for="(item) in ArticleList" :key="item._id" class="list" @click="readArticle(item._id)">
            <span class="title">{{ item.title }}</span>
            <div class="content">{{ item.content }}</div>
            <p class="time">
              {{ item.createTime.split('T')[0] }}
              <span class="tag" v-for="(i,index) in item.tag" :key="index">{{ i }}</span>
            </p>
          </li>
        </ul>
    </div>
    <div class="right">
      <info/>
    </div>
  </div>
</template>

<script>
import info from './Info';
export default {
  name: "HelloWorld",
  components: {
    info
  },
  data() {
    return {
      isLoginSuccss: null,
      envId: "",
      ArticleList: [],
    };
  },
  async created() {
    this.envId = this.$cloudbase.config.env;
    // 以匿名登录为例
    this.getContent();
  },
  methods: {
    // 获取文章
    async getContent() {
      try {
        // 掉用云函数
        await this.$cloudbase.callFunction({
          name: "getContent",
        }).then((data)=>{
          this.ArticleList = data.result.data;
        }).catch((e)=>{
          this.ArticleList = e;
        });   
      } catch (e) {
        this.ArticleList = e.message;
      }
    },
    readArticle(id){
      // 跳转路由
      this.$router.push({
        path: `/detail/${id}`,
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
  justify-content: space-around;
}
.left {
  justify-content: center;
} 
.list {
  margin-right: 20px;
  border-bottom: 1px solid #eaeaea49;
  padding: 20px;
  width: 500px;
}
.title {
  font-size: 26px;
  color: #cefffa;
}
.title:hover {
  color: #87dfd6;
}
.content {
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:4;
  margin: 20px;
  color: #9afdf3;
}
.time {
  color: white;
}
.tag {
  background: #fbfd8a;
  width: 10px;
  height: 10px;
  padding: 5px;
  margin: 10px;
  border-radius: 30%;
  font-size: 12px;
  color: black;
  user-select: none;
}
.tag:hover {
  background: #dadb76;
}
.right {
  width: 300px;
}
</style>
