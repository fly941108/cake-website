<template>
    <Row class="articles" :gutter="24">
      <Col span="12" v-for="(item,index) in currentDataList" :key="index">
        <div class="outImg common" v-if="item.isArtical == 'active'">
          <!-- 活动 -->
          <img :src="item.imgUrl" />
        </div>
        <!-- 文章 -->
        <div class="pass common" v-else>
          <div class="passImg">
            <img :src="item.imgUrl"/>
          </div>
          <div class="title">
            <p class="passTitle">{{item.title}}</p>
            <p class="readAll">阅读全文>></p>
          </div>
        </div>
      </Col>
    </Row>
</template>
<script>
import { deepCopy } from '../../../assets/js/common'
export default {
  name: 'articles',
  props: {
    dataList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted () {
    this.currentDataList = deepCopy(this.dataList)
  },
  data () {
    return {
      currentDataList: []
    }
  }
}
</script>
<style scoped>
.articles{
    width: 100%;
}
.articles .common{
  border-radius: 8px;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.10);
  overflow: hidden;
  cursor: pointer;
}
.articles .outImg{
  width: 100%;
  height: 300px;
}
.articles img{
  width: 100%;
}
.articles .pass{
  width: 100%;
  background-color: #FFF;
}
.articles .pass .passImg{
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.articles .pass .title{
  width: 100%;
  box-sizing: border-box;
  padding:15px 20px;
}
.articles .pass .title .passTitle{
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
}
.articles .pass .title .readAll{
  color: #AD814B;
  font-size: 14px;
  text-align: right;
  cursor: pointer;
}
</style>
