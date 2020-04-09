<template>
    <div class="foot">
        <div class="logo">
            <img src="../../assets/logo.png"/>
        </div>
        <div class="clearfix">
            <ul class="list">
                <li>联系我们</li>
                <li>团购帮助</li>
                <li>企业合作</li>
                <li>经营资质</li>
                <li>公告专区</li>
            </ul>
        </div>
        <div class="cooperation">
            <span><Icon type="ios-appstore" /></span>
            <span><Icon type="ios-chatbubbles" /></span>
            <span><Icon type="logo-linkedin" /></span>
        </div>
        <div class="contact">
            <p>订购热线：400-1234-2223（服务时间：8:00-20:00），团购热线：400-1234-5553</p>
            <p>客服热线：400-2234-5566，邮箱：m13588191712@163.com</p>
            <p>浙江/北京/上海，提前6小时预定，安徽/江西/江苏，提前8小时预定，部分偏远地区请提早一日预定</p>
            <p>当日蛋糕配送时间：北京/上海，14:30；杭州/广州，10:30</p>
            <p>公司注册名字：杭州麦兜蛋糕，地址：杭州余杭区金华大厦3-2-1102</p>
        </div>
        <div class="copy">
            <p>copyRight@ WCake蛋糕官网商城，版权所有：wyf</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'foot',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.clearfix::after{
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix{
    *zoom: 1;
}
.foot{
    width: 100%;
    min-height: 200px;
    background-color: #333;
    box-sizing: border-box;
    padding: 50px 0 0 0;
    margin-top: 20px;
}
.foot .logo{
    width: 120px;
    margin: 0 auto;
    color: #FFF;
}
.foot .logo img{
    width: 100%;
}
.list{
    width: 50%;
    color: #FFF;
    font-size: 12px;
    margin: 20px auto;
    display: block;
}
.list li{
    list-style-type: none;
    float: left;
    width: 20%;
    text-align: center;
    cursor: pointer;
    border-right: 1px solid #FFF;
}
.list li:last-child{
    border-right: none;
}
.cooperation{
    width: 40%;
    margin: 0 auto;
    padding: 40px 0;
}
.cooperation span{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
    background-color: #494949;
    color: #FFF;
    font-size: 28px;
    margin-right: 30px;
}
.cooperation span:last-child{
    margin-right: 0;
}
.contact{
    width: 100%;
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    color: #9a9a9a;
    padding-bottom: 20px;
    border-bottom: 1px solid #9a9a9a;
    font-weight: 500;
}
.copy{
    width: 100%;
    text-align: center;
    color: #9a9a9a;
    font-size: 12px;
    padding: 20px 0;
    font-weight: 500;
}
</style>
