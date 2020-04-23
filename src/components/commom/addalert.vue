<template>
    <div class="addAlert" :class="{visible:!currentShowMsg}">
      <div class="darkbg" @click="closeAlert"></div>
      <div class="detail" >
        <div class="animate" :class="{animaClass:currentShowMsg}">
            <div class="close-x" @click="closeAlert">&times;</div>
            <div class="cakeDetail clearfix">
            <div class="cakeImg">
                <img :src="currentProData.imgUrl"/>
            </div>
            <div class="cakeIntr">
                <p class="cakeName">{{currentProData.title}}</p>
                <p class="EngName">{{currentProData.EngName}}</p>
                <p class="cakePrice">{{currentProData.price}}</p>
            </div>
            </div>
            <div class="cakeSize cakeCommon">
            <p>规格选择</p>
            <Select class="sizeOption" v-model="caseSize">
                <Option value="1">1磅(454克)-2-3人食</Option>
                <Option value="2">2磅(908克)-4-7人食</Option>
                <Option value="3">3磅(1.36千克)-8-12人食</Option>
            </Select>
            </div>
            <div class="cakeNum cakeCommon">
                <p>数量选择</p>
                <div class="num">
                <span class="numbutton" @click="reduceNum">-</span>
                <input type="number" class="numInput" v-model="cakeNum"/>
                <span class="numbutton" @click="addNum">+</span>
                </div>
            </div>
            <div class="buttons clearfix">
                <span class="cancel" @click="closeAlert">取消</span>
                <span class="confirm" @click="confirm">确认</span>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import { deepCopy } from '@/assets/js/common'
export default {
  name: 'addalert',
  props: ['showmsg', 'proData'],
  data () {
    return {
      caseSize: '1',
      cakeNum: 1,
      currentShowMsg: '',
      currentProData: ''
    }
  },
  mounted () {
    this.currentShowMsg = this.showmsg
    this.currentProData = deepCopy(this.proData)
  },
  watch: {
    showmsg: function (newValue, oldValue) {
      this.currentShowMsg = newValue
    },
    proData: function (newValue, oldValue) {
      this.currentProData = deepCopy(this.proData)
    }
  },
  methods: {
    reduceNum () {
      if (this.cakeNum === 1) {
        this.$Message.info('不能再减少啦')
      } else {
        this.cakeNum--
      }
    },
    addNum () {
      this.cakeNum++
    },
    closeAlert () {
      this.currentShowMsg = false
      this.cakeNum = 1
      this.$emit('visibleChange', this.currentShowMsg)
    },
    confirm () {
      this.$store.dispatch('setAddNumOfCake', this.cakeNum)
      this.currentShowMsg = false
      this.cakeNum = 1
      this.$emit('visibleChange', this.currentShowMsg)
    }
  }
}
</script>
<style scoped>
.visible{
    visibility: hidden;
}
.addAlert{
    width: 100%;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
}
.addAlert .darkbg{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
}
.detail{
    width: 400px;
    min-height: 250px;
    border-radius: 4px;
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
}
.detail .animate{
    background-color: #FFF;
}
.animaClass{
    animation: showAlert 500ms;
    -moz-animation: showAlert 500ms;
    -webkit-animation: showAlert 500ms;
    -o-animation: showAlert 500ms;
}
@keyframes showAlert{
    from {transform:scale(0);opacity: .7;}
    to {transform:scale(1);opacity: 1;}
}
.detail .close-x{
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 24px;
    color: #8a8a8a;
    cursor: pointer;
}
.cakeDetail{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
}
.cakeDetail .cakeImg{
    width: 120px;
    overflow: hidden;
    float: left;
}
.cakeDetail .cakeImg img{
    width: 100%;
}
.cakeIntr{
    float: left;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
}
.cakeIntr .EngName{
    color: #b8b2b2;
    font-weight: 600;
    line-height: 25px;
}
.cakeCommon{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #9b9797;
}
.cakeSize{
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
}
.cakeSize .sizeOption{
    width: 200px;
}
.cakeNum .numbutton{
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: #d2d2d2;
    color: #747474;
    cursor: pointer;
}
.cakeNum  .numInput{
    border: none;
    width: 20px;
    outline: none;
    margin: 0 10px;
    text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
.buttons{
    width: 100%;
    height: 50px;
}
.buttons span{
    display: block;
    width: 50%;
    height: 100%;
    float: left;
    line-height: 50px;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;
    cursor: pointer;
}
.buttons .cancel{
    background-color: #a8a6a6;
}
.buttons .confirm{
    background-color: #795f37;
}
</style>
