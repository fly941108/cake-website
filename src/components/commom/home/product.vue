<template>
    <div class="product">
        <div class="good" v-for="(item,index) in currentProduct" :key="index">
          <div class="goodImg">
            <img :src="item.imgUrl"/>
          </div>
          <p class="title">{{item.title}}</p>
          <p class="subTitle">{{item.subTitle}}</p>
          <div class="labels">
            <span v-for="label in item.lables " :key="label">{{label + ' >'}}</span>
          </div>
          <div class="price">
            <p class="limit">{{item.price}}</p>
            <div class="addGood" @click="addGood(item)">加入购物车</div>
          </div>
        </div>
        <addAlert :proData="proData" :showmsg="isShow" @visibleChange="isShowChange"></addAlert>
    </div>
</template>
<script>
import addAlert from '@/components/commom/addalert'
import { deepCopy } from '@/assets/js/common'
export default {
  name: 'product',
  components: {
    addAlert
  },
  props: {
    products: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      currentProduct: [],
      isShow: false,
      proData: ''
    }
  },
  mounted () {
    this.currentProduct = deepCopy(this.products)
  },
  methods: {
    addGood (item) {
      this.isShow = true
      this.proData = item
    },
    isShowChange (val) {
      this.isShow = val
    }
  }
}
</script>
<style scoped>
.product{
  width: 100%;
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.good{
  width: 23%;
  /* float: left; */
  text-align: left;
  cursor: pointer;
}
.good .goodImg{
    width: 100%;
    height: 170px;
    overflow: hidden;
    border-radius: 4px;
}
.good .goodImg img{
    width: 100%;
}
.good .title{
  color: #000;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0;
}
.good .subTitle{
    color: rgba(0, 0, 0, .6);
    height: 35px;
}
.good .labels{
    width: 100%;
}
.good .labels span{
    display: inline-block;
    height: 20px;
    border: 1px solid #D5BFA7;
    color: #D5BFA7;
    cursor: pointer;
    border-radius: 50px;
    text-align: center;
    padding: 0px 10px;
    line-height: 20px;
    margin: 15px 10px 0 0;
}
.good .price{
    width: 100%;
    color: #b0986f;
    border-top: 1px dashed #D5BFA7;
    margin-top: 16px;
    padding-top: 10px;
    font-size: 16px;
}
.good .price .limit{
    float: left;
}
.good .price .addGood{
    float: right;
    color: #FFF;
    background-color: #643E28;
    font-size:12px;
    line-height: 20px;
    padding: 0 12px;
    cursor: pointer;
}
</style>
