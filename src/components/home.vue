<template>
    <div>
        <!-- 走马图 -->
        <carouse></carouse>
        <div class="content">
            <!-- 锚点列表 -->
            <anchor :listAnchor="list"></anchor>
            <!-- 新品专区 -->
            <module :data="newCake">
                <post :postInfo="newCake.allImgUrl"></post>
                <product :products="newCake.products"></product>
            </module>
            <!-- 生日专区 -->
            <module :data="birthCake">
                <post :postInfo="birthCake.allImgUrl"></post>
                <product :products="birthCake.products"></product>
            </module>
            <!-- 儿童专区 -->
            <module :data="childCake">
                <post :postInfo="childCake.allImgUrl"></post>
                <product :products="childCake.products"></product>
            </module>
            <!-- 聚会专区 -->
            <module :data="partyCake">
                <post :postInfo="partyCake.allImgUrl"></post>
                <product :products="partyCake.products"></product>
            </module>
            <!-- 活动 -->
            <module :data="active">
                <passage :dataList="active.list"></passage>
            </module>
            <!-- 文章 -->
            <module :data="articles">
                <passage :dataList="articles.list"></passage>
            </module>
        </div>
    </div>
</template>
<script>
import carouse from '../components/commom/home/carouse'
import anchor from '../components/commom/home/anchor'
import module from '../components/commom/home/moduel'
import product from '../components/commom/home/product'
import post from '../components/commom/home/post'
import passage from '../components/commom/home/passage'
export default {
  name: 'home',
  components: {
    carouse, anchor, module, product, post, passage
  },
  data () {
    return {
      // 锚点数据
      list: [
        {title: '新品', imgUrl: require('../assets/img/anchor/cake.png'), id: 'new'},
        {title: '生日', imgUrl: require('../assets/img/anchor/birth.png'), id: 'birth'},
        {title: '儿童', imgUrl: require('../assets/img/anchor/child.png'), id: 'child'},
        {title: '聚会', imgUrl: require('../assets/img/anchor/party.png'), id: 'party'},
        {title: '活动专区', imgUrl: require('../assets/img/anchor/active.png'), id: 'active'}
      ],
      // 新品蛋糕数据
      newCake: {
        id: 'new',
        title: '新品',
        subTitle: '专区',
        isMore: false,
        allImgUrl: require('../assets/img/cakelist/post/newPost.png'),
        products: [
          {title: '草莓蛋糕', EngName: 'Strawberry Cake', subTitle: '草莓搭配奶油，从王室，前往温布尔登的雨季', lables: ['情侣', '人气'], price: '¥228.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/strawberry.png')},
          {title: '榴莲飘飘', EngName: 'Durian  Cake', subTitle: '丰厚的乳汁奶油，足量的榴莲果肉', lables: ['生日', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/durian.png')},
          {title: '巧克力蛋糕', EngName: 'Chocolate Cake', subTitle: '卡通定制款，简单，柔软', lables: ['设计师款', '新品'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/chokelate.png')},
          {title: '蓝莓轻乳拿破仑', EngName: 'Napoleon Cake', subTitle: '精心搭配的轻乳蛋糕，以及进口蓝莓，品尝无法忘记的味道', lables: ['新品', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/napoleon.png')}
        ]
      },
      // 生日专区
      birthCake: {
        id: 'child',
        title: '生日',
        subTitle: '专区',
        isMore: false,
        allImgUrl: require('../assets/img/cakelist/post/birthPost.png'),
        products: [
          {title: '草莓蛋糕', EngName: 'Strawberry Cake', subTitle: '草莓搭配奶油，从王室，前往温布尔登的雨季', lables: ['情侣', '人气'], price: '¥228.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/strawberry.png')},
          {title: '榴莲飘飘', EngName: 'Durian  Cake', subTitle: '丰厚的乳汁奶油，足量的榴莲果肉', lables: ['生日', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/durian.png')},
          {title: '巧克力蛋糕', EngName: 'Chocolate Cake', subTitle: '卡通定制款，简单，柔软', lables: ['设计师款', '新品'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/chokelate.png')},
          {title: '蓝莓轻乳拿破仑', EngName: 'Napoleon Cake', subTitle: '精心搭配的轻乳蛋糕，以及进口蓝莓，品尝无法忘记的味道', lables: ['新品', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/napoleon.png')}
        ]
      },
      // 儿童专区
      childCake: {
        id: 'birth',
        title: '儿童',
        subTitle: '专区',
        isMore: false,
        allImgUrl: require('../assets/img/cakelist/post/childPost.png'),
        products: [
          {title: '草莓蛋糕', EngName: 'Strawberry Cake', subTitle: '草莓搭配奶油，从王室，前往温布尔登的雨季', lables: ['情侣', '人气'], price: '¥228.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/strawberry.png')},
          {title: '榴莲飘飘', EngName: 'Durian  Cake', subTitle: '丰厚的乳汁奶油，足量的榴莲果肉', lables: ['生日', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/durian.png')},
          {title: '巧克力蛋糕', EngName: 'Chocolate Cake', subTitle: '卡通定制款，简单，柔软', lables: ['设计师款', '新品'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/chokelate.png')},
          {title: '蓝莓轻乳拿破仑', EngName: 'Napoleon Cake', subTitle: '精心搭配的轻乳蛋糕，以及进口蓝莓，品尝无法忘记的味道', lables: ['新品', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/napoleon.png')}
        ]
      },
      //   聚会专区
      partyCake: {
        id: 'party',
        title: '聚会',
        subTitle: '专区',
        isMore: false,
        allImgUrl: require('../assets/img/cakelist/post/partyPost.png'),
        products: [
          {title: '草莓蛋糕', EngName: 'Strawberry Cake', subTitle: '草莓搭配奶油，从王室，前往温布尔登的雨季', lables: ['情侣', '人气'], price: '¥228.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/strawberry.png')},
          {title: '榴莲飘飘', EngName: 'Durian  Cake', subTitle: '丰厚的乳汁奶油，足量的榴莲果肉', lables: ['生日', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/durian.png')},
          {title: '巧克力蛋糕', EngName: 'Chocolate Cake', subTitle: '卡通定制款，简单，柔软', lables: ['设计师款', '新品'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/chokelate.png')},
          {title: '蓝莓轻乳拿破仑', EngName: 'Napoleon Cake', subTitle: '精心搭配的轻乳蛋糕，以及进口蓝莓，品尝无法忘记的味道', lables: ['新品', '人气'], price: '¥298.00/908g(2.0磅)', imgUrl: require('../assets/img/cakelist/new/napoleon.png')}
        ]
      },
      // 活动
      active: {
        id: 'active',
        title: '活动门',
        subTitle: '是被吸引了吧',
        isMore: false,
        list: [
          {isArtical: 'active', imgUrl: require('../assets/img/cakelist/active/active.png')}
        ]
      },
      // 文章
      articles: {
        id: 'articles',
        title: '麦兜蛋糕',
        subTitle: '文章',
        isMore: true,
        list: [
          {isArtical: 'pass', imgUrl: require('../assets/img/cakelist/article/pass01.png'), title: '一种蛋糕，一个故事'},
          {isArtical: 'pass', imgUrl: require('../assets/img/cakelist/article/pass02.png'), title: '白，就是这么纯粹'}
        ]
      }
    }
  }
}
</script>
<style scoped>
.content{
    width: 80%;
    margin: 0 auto;
}
</style>
