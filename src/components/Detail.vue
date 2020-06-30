<template>
  <div class="container">
    <div class="left">
      <div>
        <span class="title">{{ Article.title }}</span>    
        <p class="time">
          {{ Article.createTime.split('T')[0] }}   
        </p>
      </div>
      <div class="tag-list" v-if="Article.tag">
        <span class="tag" v-for="(i,index) in Article.tag" :key="index">{{ i }}</span>      
      </div>
      <div class="content">{{ Article.content }}</div>
    </div>
    <div class="right">
      <info />
    </div>
  </div>
</template>

<script>
import info from './Info';
export default {
  name: 'detail',
  components: {
    info
  },
  data() {
    return {
      Article: {}
    }
  },
  methods: {
    getArticleById(id){
      try {
        this.$cloudbase.callFunction({
          name: "getArticle",
          data: {
            id
          }
        }).then((data)=>{
          this.Article = data.result.data[0];
          console.log(data.result.data[0])
        }).catch((e)=>{
          this.Article = e;
        });   
      } catch (e) {
        this.Article = e.message;
      }
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getArticleById(id);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 26px;
  text-align: center;
}
.title:hover {
  color: rgb(56, 183, 234);
}
.tag-list {
  height: 60px;
  line-height: 60px;
}
.content {
  width: 800px;
  padding: 30px 50px;
}
.time {
  color: white;
}
.tag {
  background: #fbfd8a;
  padding: 10px;
  margin: 10px;
  border-radius: 40%;
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