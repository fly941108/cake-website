<template>
    <div class="outside">
        <div class="bar">
            <div class="common items">
                <div class="logo">
                    <img src="@/assets/logo.png" @click="toHome"/>
                </div>
                <div class="list local" @click="typechange('location')">
                    <Icon class="icon" type="ios-pin" />
                    <p>杭州市</p>
                </div>
                <div class="list product" @click="typechange('more')">
                    <Icon class="icon" type="md-reorder" />
                    <p>所有产品</p>
                </div>
                <div class="list home" @click="toPath()">
                    <Icon class="icon" type="ios-home-outline" />
                    <p>首页</p>
                </div>
                <div class="list cake" @click="toPath()">
                    <Icon class="icon" type="ios-ice-cream-outline" />
                    <p>蛋糕</p>
                </div>
                <div class="list candy" @click="toPath()">
                    <Icon class="icon" type="ios-pizza-outline" />
                    <p>小食</p>
                </div>
                <div class="list active" @click="toPath()">
                    <Icon class="icon" type="ios-pulse-outline" />
                    <p>最新活动</p>
                </div>
                <div class="list bank" @click="toPath()">
                    <Icon class="icon" type="logo-yen" />
                    <p>银行活动</p>
                </div>
                <div class="list member" @click="toPath()">
                    <Icon class="icon" type="ios-people-outline" />
                    <p>会员中心</p>
                </div>
            </div>
            <div class="common person">
                <div v-if="loginStatus" class="list" @click="toLogin">
                    <Icon class="icon" type="ios-person-outline" />
                    <p>注册|登陆</p>
                </div>
                <div v-else class="list" @click="toPath()">
                    <Icon class="icon" type="ios-person-outline" />
                    <p>我的</p>
                </div>
                <div class="list" @click="toPath()">
                    <Badge :count="shopcart">
                        <Icon class="icon" type="ios-cart-outline" />
                    </Badge>
                    <p>购物车</p>
                </div>
                <div class="list" @click="toPath()">
                    <Icon class="icon" type="ios-keypad" />
                    <p>更多</p>
                </div>
            </div>
        </div>
        <div class="darkbg" v-show="type=='more' || type=='location'" @click="type = ''"></div>
        <div class="infoList" v-show="type=='more' || type=='location'" :class="{animationList:type=='more' || type=='location'}">
            <div v-if="type=='location'">
                <p class="currentLocate">
                    <Icon type="ios-navigate" class="localIcon"/>当前定位：{{location.current}}
                </p>
                <Row class="locations">
                    <Col span="6" v-for="item in location.localList" :key="item.id">
                        <span class="city">{{item.name}}</span>
                    </Col>
                </Row>
            </div>
            <div v-else-if="type=='more'" class="clearfix">
                <div class="inLeft product">
                    <p class="sort"><Icon class="icon" type="ios-ice-cream-outline" />所有蛋糕</p>
                    <div class="ulSort">
                        <div class="list">
                            <p class="sortTitle">口味筛选</p>
                            <ul>
                                <li v-for="item in taste" :key="item.id">{{item.text}}</li>
                            </ul>
                        </div>
                        <div class="list">
                            <p class="sortTitle">场景筛选</p>
                            <ul>
                                <li v-for="item in scence" :key="item.id">{{item.text}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="inLeft snacks">
                    <p class="sort"><Icon class="icon" type="ios-pizza-outline" />所有小食</p>
                    <div class="ulSort">
                        <ul>
                            <li v-for="item in snacks" :key="item.id">{{item.text}}</li>
                        </ul>
                    </div>
                </div>
                <div class="inLeft parts">
                    <p class="sort"><Icon class="icon" type="ios-flower-outline" />所有配件</p>
                    <div class="ulSort">
                        <ul>
                            <li v-for="item in parts" :key="item.id">{{item.text}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      type: '',
      taste: [
        {id: 1, text: '拿破仑系列'},
        {id: 2, text: '水果系列'},
        {id: 3, text: '芝士系列'},
        {id: 4, text: '奶油系列'},
        {id: 5, text: '咖啡系列'},
        {id: 6, text: '冰淇淋系列'}
      ],
      scence: [
        {id: 7, text: '生日'},
        {id: 8, text: '聚会'},
        {id: 9, text: '长辈'},
        {id: 10, text: '情侣'},
        {id: 11, text: '儿童'},
        {id: 12, text: '下午茶'}
      ],
      snacks: [
        {id: 13, text: '美味早餐'},
        {id: 14, text: '挂耳咖啡'},
        {id: 15, text: '下午茶套餐'},
        {id: 16, text: '酥软欧包'},
        {id: 17, text: '小朵饼干'},
        {id: 18, text: '芝士生巧'}
      ],
      parts: [
        {id: 19, text: '生日牌'},
        {id: 20, text: '欢乐礼包'},
        {id: 21, text: '生日蜡烛'},
        {id: 22, text: '生日装扮'}
      ],
      location: {
        current: '杭州',
        localList: [
          {id: 1, name: '上海'},
          {id: 2, name: '北京'},
          {id: 3, name: '广州'},
          {id: 4, name: '苏州'},
          {id: 5, name: '大连'},
          {id: 6, name: '重庆'},
          {id: 7, name: '杭州'},
          {id: 8, name: '无锡'},
          {id: 9, name: '佛山'},
          {id: 10, name: '宁波'},
          {id: 11, name: '南京'},
          {id: 12, name: '成都'},
          {id: 13, name: '东莞'},
          {id: 14, name: '武汉'},
          {id: 15, name: '青岛'},
          {id: 16, name: '沈阳'},
          {id: 17, name: '烟台'}
        ]
      }
    }
  },
  computed: {
    shopcart () {
      return this.$store.getters.getNumOfCake
    },
    loginStatus () {
      if (this.$store.getters.getTocken) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toLogin () {
      if (this.loginStatus) {
        this.$store.dispatch('actionSetShowLogin', true)
      }
      this.type = ''
    },
    typechange (e) {
      this.type = e
    },
    toPath () {
      this.type = ''
    }
  }
}
</script>
<style scoped>
.outside{
    position: relative;
    width: 100%;
    height: 100%;
}
.bar{
    width: 100%;
    min-width: 1210px;
    position: fixed;
    top: 0;
    z-index: 10000;
    display: flex;
    justify-content: space-between;
    background-color: #FFF;
    border-bottom: 1px solid #CCCCCC;
}
.bar .common div{
    height: 70px;
    float: left;
    text-align: center;
    border-left: 1px solid #CCCCCC;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding-top: 10px;
}
.bar .items .logo{
    width: 170px;
    line-height: 70px;
}
.bar .items .logo img{
    width: 70%;
    display: inline-block;
}
.bar .items .list:last-child{
    border-right: 1px solid #CCCCCC;
}
.bar .common .list{
    width: 100px;
    color: #8c8c8c;
}
.bar .common .list:hover{
    color: #000;
}
.outside .icon{
    font-size: 22px;
    margin-bottom: 10px;
}
.bar .person{
    float: right;
}
.darkbg{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 1000;
}
.infoList{
    width: 100%;
    min-height: 250px;
    background-color: #FFF;
    position: fixed;
    top: 70px;
    left: 0;
    z-index: 1001;
    box-sizing: border-box;
    padding: 20px 170px;
}
.infoList.animationList{
    animation: drop_down 300ms;
    -moz-animation: drop_down 300ms;
    -webkit-animation: drop_down 300ms;
    -o-animation: drop_down 300ms;
}
@keyframes drop_down{
    from {transform:scale(0,1);opacity: .7;}
    to {transform:scale(1,1);opacity: 1;}
}
@-webkit-keyframes drop_down{
    from {transform:scale(0,1);opacity: .7;}
    to {transform:scale(1,1);opacity: 1;}
}
.infoList .inLeft{
    min-width: 200px;
    float: left;
    margin-right: 20px;
}
.infoList .inLeft .ulSort{
    display: flex;
    justify-content: center;
}
.infoList .inLeft .sort{
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
}
.infoList .inLeft .list:first-child{
    margin-right: 15%;
}
.infoList .inLeft .sortTitle{
    line-height: 30px;
    font-weight: 500;
    font-size: 16px;
}
.infoList .inLeft ul li {
    list-style-type: none;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
    color: #606060;
}
.infoList .currentLocate{
    width: 100%;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
}
.infoList .currentLocate .localIcon{
    font-size: 20px;
    margin-top: -3px;
    margin-right: 8px;
}
.infoList .locations{
    width: 70%;
}
.infoList .locations .city{
    font-size: 16px;
    cursor: pointer;
    line-height: 30px;
    display: inline-block;
    width: 50%;
}
</style>
