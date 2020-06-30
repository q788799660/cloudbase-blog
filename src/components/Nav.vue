<template>
  <div>
    <ul>
        <li v-for="(item,index) in navList" :key="index">
            <router-link :to="item.path" class="link">{{ item.name }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return {
            navList: [{
                name: '文章',
                path: '/article'
            },{
                name: '标签',
                path: '/tag'
            },{
                name: '关于我',
                path: '/about'
            },
            ]
        }
    },
}
</script>

<style >
ul  {
    list-style-type: none;
    display: flex;
}
li {
    padding: 10px;
    margin: 10px;
    user-select: none;
    background: #eaeaea;
}
li:hover {
    background: #999;
    transition: background .5s ease-in-out;
}
.link {
    text-decoration: none;
    color: black;
}
</style>