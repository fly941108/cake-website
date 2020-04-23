<template>
    <div class="anchorContent">
        <div class="anchor" v-for="(item,index) in currentList" :key="index">
          <a :href="'#'+item.id">
            <div class="title">{{item.title}}</div>
            <img class="anchorImg" :src="item.imgUrl"/>
          </a>
        </div>
    </div>
</template>
<script>
import { deepCopy } from '@/assets/js/common'
export default {
  name: 'anchor',
  props: {
    listAnchor: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      currentList: ''
    }
  },
  mounted () {
    this.currentList = deepCopy(this.listAnchor)
  }
}
</script>
<style scoped>
.anchorContent{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
.anchor{
    display: inline-flex;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.06);
    width: 15%;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}
.anchor .title{
  font-size: 16px;
  color: #e2994f;
  margin-right: 10px;
  font-weight: 500;
}
.anchor .anchorImg{
  width: 50px;
}
</style>
