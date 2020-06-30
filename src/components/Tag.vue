<template>
  <div>
    <div class="tag-container">
      <ul>
        <li v-for="(item,index) in TagList" :key="index" v-show="item.tag">
          <span class="tag" v-for="(i,j) in item.tag" :key="j" @click="searchArticleByTag(i)">{{ i }}</span>
        </li>
      </ul>    
    </div>
    <div class="container">
        <ul>
          <li v-for="(item) in ArticleList" :key="item.id" class="list">
            <span class="title">{{ item.title }}</span>
            <div class="content">{{ item.content }}</div>
            <p class="time">
              {{ item.createTime.split('T')[0] }}
              <span class="tag" v-for="(i,index) in item.tag" :key="index">{{ i }}</span>
            </p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data(){
    return {
      TagList: [],
      ArticleList: []
    }
  },
  created(){
    this.getTag();
  },
  methods:{
    async getTag(){
      try {
        await this.$cloudbase.callFunction({
          name: "getContent",
        }).then((data)=>{
          this.TagList = data.result.data;
        }).catch((e)=>{
          this.TagList = e;
        });   
      } catch (e) {
        this.TagList = e.message;
      }      
    },
    searchArticleByTag(tag){
      try {
        this.$cloudbase.callFunction({
          name: "getTag",
          data: {
            tag
          }
        }).then((data)=>{
          this.ArticleList = data.result.data;
          console.log(data)
        }).catch((e)=>{
          this.ArticleList = e;
          console.log(e)
        });   
      } catch (e) {
        this.ArticleList = e.message;
          console.log(e)
      } 
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
.tag {
  text-decoration: none;
  background: #fbfd8a;
  width: 10px;
  height: 10px;
  padding: 10px;
  margin: 10px;
  border-radius: 30%;
  font-size: 12px;
  color: black;
  user-select: none;
}
.tag:hover {
  background: #dadb76;
}
.container, .tag-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
}
.list {
  margin-right: 20px;
  border-bottom: 1px solid #eaeaea;
  padding: 20px;
  width: 600px;
}
.title {
  font-size: 26px;
}
.title:hover {
  color: rgb(56, 183, 234);
}
.content {
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:4;
  margin: 20px;
}
.time {
  color: #888;
}

</style>
