<template>
    <div class="module">
        <div class="heading" :id="currentData.id">
            <div class="headLeft">{{currentData.title}}<span class="subtitle">/{{currentData.subTitle}}</span></div>
            <div class="headRight" v-show="currentData.isMore">
                <Button class="showMore" type="text">查看更多></Button>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import { deepCopy } from '../../../assets/js/common'
export default {
  name: 'module',
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: '标题',
          subTitle: '副标题',
          isMore: false
        }
      }
    }
  },
  data () {
    return {
      currentData: {}
    }
  },
  mounted () {
    this.currentData = deepCopy(this.data)
  }
}
</script>
<style scoped>
.module{
    width: 100%;
}
.module .heading{
    width: 100%;
    margin: 35px 0;
    display: flex;
    justify-content: space-between;
    letter-spacing: 4px;
    color: #694016;
}
.module .heading .headLeft{
    font-size: 24px;
    font-weight: 600;
}
.module .heading .headLeft .subtitle{
    font-size: 14px;
    font-weight: normal;
}
.module .heading .headRight .showMore{
    color: #694016;
    font-size: 14px;
}
</style>
