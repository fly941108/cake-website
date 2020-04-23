<template>
    <Row class="outPost">
        <Col class="post">
            <a href="#">
                <img :src="currentPost"/>
            </a>
        </Col>
    </Row>
</template>
<script>
export default {
  name: 'post',
  props: ['postInfo'],
  data () {
    return {
      currentPost: ''
    }
  },
  mounted () {
    this.currentPost = this.postInfo
  }
}
</script>
<style scoped>
.outPost{
    margin-bottom: 30px;
}
.outPost .post{
    height: 250px;
    border-radius: 4px;
    overflow: hidden;
}
.outPost .post img{
    width: 100%;
}
</style>
