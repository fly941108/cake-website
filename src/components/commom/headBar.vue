<template>
    <div class="bar">
        <div class="common items">
            <div class="logo">
                <img src="../../assets/logo.png"/>
            </div>
            <div class="list local">
                <Icon class="icon" type="ios-pin" />
                <p>杭州市</p>
            </div>
            <div class="list product">
                <Icon class="icon" type="md-reorder" />
                <p>所有产品</p>
            </div>
            <div class="list home">
                <Icon class="icon" type="ios-home-outline" />
                <p>首页</p>
            </div>
            <div class="list cake">
                <Icon class="icon" type="ios-ice-cream-outline" />
                <p>蛋糕</p>
            </div>
            <div class="list candy">
                <Icon class="icon" type="ios-pizza-outline" />
                <p>小食</p>
            </div>
            <div class="list active">
                <Icon class="icon" type="ios-pulse-outline" />
                <p>最新活动</p>
            </div>
            <div class="list bank">
                <Icon class="icon" type="logo-yen" />
                <p>银行活动</p>
            </div>
            <div class="list member">
                <Icon class="icon" type="ios-people-outline" />
                <p>会员中心</p>
            </div>
        </div>
        <div class="common person">
            <div class="list">
                <Icon class="icon" type="ios-person-outline" />
                <p>注册|登陆</p>
            </div>
            <div class="list">
                <Badge :count="3">
                    <Icon class="icon" type="ios-cart-outline" />
                </Badge>
                <p>购物车</p>
            </div>
            <div class="list">
                <Icon class="icon" type="ios-keypad" />
                <p>更多</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
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
.bar .common .list .icon{
    font-size: 22px;
    margin-bottom: 10px;
}
.bar .person{
    float: right;
}
</style>
